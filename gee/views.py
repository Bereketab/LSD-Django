from importlib.resources import path
from django.shortcuts import render
from django.core.files import File
from django.http import HttpResponse
from django.views.generic import TemplateView 
from geo.Geoserver import Geoserver
import glob
import fiona
import rasterio
import rasterio.mask
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework import viewsets
import numpy as np
from django.http import JsonResponse
import geopandas as gpd
from shapely.geometry import Polygon

import matplotlib.pyplot as plt
import gemgis as gg

from django.views.decorators.csrf import csrf_exempt
import pathlib
import os

from django.conf import settings

import subprocess

from .models import ShapeFile
from .serializers import ShapefileSerializer
from django.http import JsonResponse
from django.core import serializers




def getAnalysis(input_raster,raster_path,model_type):
    width= input_raster.width
    height= input_raster.height
    area= width*height
    array = input_raster.read()
    if(model_type=='carbon'):
        int_array = array.astype(np.int16)
    if(model_type=='erosion'):
        int_array = array.astype(np.int8)
    if(model_type=='moisture'):
        int_array = array.astype(np.int32)
    if(model_type=='productivity'):
        int_array = array.astype(np.int32)
    file_array = []
    for item in int_array[0]:
        for i in item:
            file_array.append(i)
                    
    context={
                "int_array": file_array,
                "area": area,

            }
    geo = Geoserver('http://localhost:8088/geoserver', username='admin', password='geoserver')
   
    # geo.create_coveragestore(path=raster_path[0], workspace=model_type)
    # geo.upload_style(path=r'/home/ghost/Desktop/ld_layers/carbon/'+str(model_type)+'.sld', workspace=model_type)
    # geo.publish_style(layer_name='soil_carbon', style_name=model_type, workspace=model_type)
    return context


@csrf_exempt
@api_view(['GET'])
@renderer_classes([JSONRenderer]) 
def org_car(request):
    input_raster = rasterio.open(r'/home/ghost/Desktop/ld_layers/carbon/soil_carbon.tif')
    raster_path = glob.glob(r'/home/ghost/Desktop/ld_layers/carbon/soil_carbon.tif')
    return Response(getAnalysis(input_raster,raster_path,'carbon'))




@csrf_exempt
@api_view(['GET'])
@renderer_classes([JSONRenderer]) 
def erosion(request):
    input_raster = rasterio.open(r'/home/ghost/Desktop/ld_layers/erosion/erosion.tif')
    raster_path = glob.glob(r'/home/ghost/Desktop/ld_layers/erosion/erosion.tif')
    # width= input_raster.width
    # height= input_raster.height
    # area= width*height
    # array = input_raster.read()
    # int_array = array.astype(np.int8)


    # context={
    #     "int_array": int_array,
    #     "area": area,
    # }
    # geo = Geoserver('http://localhost:8088/geoserver', username='admin', password='geoserver')
    # geo.create_workspace(workspace='erosion')   
    # geo.create_coveragestore(path=raster_path[0], workspace='erosion')
    # #geo.upload_style(path=r'/home/ghost/Desktop/ld_layers/erosion/erosion.sld', workspace='erosion')
    # geo.publish_style(layer_name='erosion', style_name='erosion', workspace='erosion')

    return Response(getAnalysis(input_raster,raster_path,'erosion'))



@csrf_exempt
@api_view(['GET'])
@renderer_classes([JSONRenderer]) 
def soil_moisture(request):
    input_raster = rasterio.open(r'/home/ghost/Desktop/ld_layers/moisture/soil_moisture.tif')
    raster_path = glob.glob(r'/home/ghost/Desktop/ld_layers/moisture/soil_moisture.tif')
    # array = input_raster.read()
    # int_array = array.astype(np.int32)
    # width= input_raster.width
    # height= input_raster.height
    # area= width*height

    # context={
    #     "int_array": int_array,
    #     "area": area,
    # }
    # geo = Geoserver('http://localhost:8088/geoserver', username='admin', password='geoserver')
    # geo.create_workspace(workspace='moisture')   
    # geo.create_coveragestore(path=raster_path[0], workspace='moisture')
    # geo.upload_style(path=r'/home/ghost/Desktop/ld_layers/moisture/soil_mositure.sld', workspace='moisture')
    # geo.publish_style(layer_name='soil_moisture', style_name='soil_mositure', workspace='moisture')

    return Response(getAnalysis(input_raster,raster_path,'moisture'))


@csrf_exempt
@api_view(['GET'])
@renderer_classes([JSONRenderer]) 
def soil_productivity(request):
    input_raster = rasterio.open(r'/home/ghost/Desktop/ld_layers/productivity/productivity.tif')
    raster_path = glob.glob(r'/home/ghost/Desktop/ld_layers/productivity/productivity.tif')
#     array = input_raster.read()
    
#     width= input_raster.width
#     height= input_raster.height
#     area= width*height


#     int_array = array.astype(np.int32)
#     context={
#         "int_array": int_array,
#         "area": area,
#     }
#     geo = Geoserver('http://localhost:8088/geoserver', username='admin', password='geoserver')
    # geo.create_workspace(workspace='productivity')   
#     geo.create_coveragestore(path=raster_path[0], workspace='productivity')
    return Response(getAnalysis(input_raster,raster_path,'productivity'))



@csrf_exempt
@api_view(['GET'])
@renderer_classes([JSONRenderer]) 
def carbon_clip(request,lat1,lon1,lat2,lon2):
    input_raster = r'/home/ghost/Desktop/ld_layers/carbon/soil_carbon.tif'
    raster = rasterio.open(input_raster)
    bbox = [lat1,lon1,lat2,lon2]
    raster_clipped = gg.raster.clip_by_bbox(raster=raster,bbox=bbox, save_clipped_raster=True,path='/home/ghost/Desktop/ld_layers/carbon/output/carbon_clipped.tif', overwrite_file=True)
    dataset = rasterio.open(r'/home/ghost/Desktop/ld_layers/carbon/output/carbon_clipped.tif')
    geo = Geoserver('http://localhost:8088/geoserver', username='admin', password='geoserver')
    # geo.create_workspace(workspace='carbon')
    raster_path = glob.glob(r'/home/ghost/Desktop/ld_layers/carbon/output/carbon_clipped.tif')
    for i in range(len(raster_path)):
        path=raster_path[i]
        geo.create_coveragestore(path=path, workspace='carbon')
    # geo.upload_style(path=r'/home/ghost/Desktop/ld_layers/carbon/carbon.sld', workspace='carbon')
    # geo.publish_style(layer_name='carbon_clipped', style_name='carbon', workspace='carbon')

    array = dataset.read()
    int_array = array.astype(np.int32)
    width= dataset.width
    height= dataset.height
    area= width*height

    context={
        "int_array": int_array,
	"area": area,

    }
    return Response(context)




csrf_exempt
@api_view(['GET'])
@renderer_classes([JSONRenderer]) 
def erosion_clip(request,lat1,lon1,lat2,lon2):
    
    input_raster = r'/home/ghost/Desktop/ld_layers/erosion/erosion.tif'
    raster = rasterio.open(input_raster)

    bbox = [lat1,lon1,lat2,lon2]
    print(bbox)
    raster_clipped = gg.raster.clip_by_bbox(raster=raster,bbox=bbox,raster_extent=bbox, save_clipped_raster=True,path='/home/ghost/Desktop/ld_layers/erosion/output/erosion_clipped.tif', overwrite_file=True)
    dataset = rasterio.open(r'/home/ghost/Desktop/ld_layers/erosion/output/erosion_clipped.tif')

    geo = Geoserver('http://localhost:8088/geoserver', username='admin', password='geoserver')
    # geo.create_workspace(workspace='erosion')

    raster_path = glob.glob(r'/home/ghost/Desktop/ld_layers/erosion/output/erosion_clipped.tif')

    for i in range(len(raster_path)):
        path=raster_path[i]
        geo.create_coveragestore(path=path, workspace='erosion')
    #geo.upload_style(path=r'/home/ghost/Desktop/ld_layers/erosion/erosion.sld', workspace='erosion')
    # geo.publish_style(layer_name='erosion_clipped', style_name='erosion', workspace='erosion')

    array = dataset.read()
    int_array = array.astype(np.int8)
    width= dataset.width
    height= dataset.height
    area= width*height


    context={
        "int_array": int_array,
        "area": area,
    }
    return Response(context)





csrf_exempt
@api_view(['GET'])
@renderer_classes([JSONRenderer]) 
def soil_moisture_clip(request,lat1,lon1,lat2,lon2):

    input_raster = r'/home/ghost/Desktop/ld_layers/moisture/soil_moisture.tif'
    raster = rasterio.open(input_raster)

    bbox = [lat1,lon1,lat2,lon2]

    raster_clipped = gg.raster.clip_by_bbox(raster=raster,bbox=bbox, save_clipped_raster=True,path='/home/ghost/Desktop/ld_layers/moisture/output/moisture_clipped.tif', overwrite_file=True)

    dataset = rasterio.open(r'/home/ghost/Desktop/ld_layers/moisture/output/moisture_clipped.tif')


    geo = Geoserver('http://localhost:8088/geoserver', username='admin', password='geoserver')
    # geo.create_workspace(workspace='moisture')

    raster_path = glob.glob(r'/home/ghost/Desktop/ld_layers/moisture/output/moisture_clipped.tif')

    for i in range(len(raster_path)):
        path=raster_path[i]
        geo.create_coveragestore(path=path, workspace='moisture')
    array = dataset.read()

    width= dataset.width
    height= dataset.height
    area= width*height

    int_array = array.astype(np.int32)

    context={
        "int_array": int_array,
        "area": area,
    }
    return Response(context)





csrf_exempt
@api_view(['GET'])
@renderer_classes([JSONRenderer]) 
def soil_productivity_clip(request,lat1,lon1,lat2,lon2):

    input_raster = r'/home/ghost/Desktop/ld_layers/productivity/productivity.tif'
    raster = rasterio.open(input_raster)

    bbox = [lat1,lon1,lat2,lon2]

    raster_clipped = gg.raster.clip_by_bbox(raster=raster,bbox=bbox, save_clipped_raster=True,path='/home/ghost/Desktop/ld_layers/productivity/output/productivity_clipped.tif', overwrite_file=True)

    dataset = rasterio.open(r'/home/ghost/Desktop/ld_layers/productivity/output/productivity_clipped.tif')


    geo = Geoserver('http://localhost:8088/geoserver', username='admin', password='geoserver')
    # geo.create_workspace(workspace='productivity')

    raster_path = glob.glob(r'/home/ghost/Desktop/ld_layers/productivity/output/productivity_clipped.tif')

    for i in range(len(raster_path)):
        path=raster_path[i]
        geo.create_coveragestore(path=path, workspace='productivity')
    #geo.upload_style(path=r'/home/ghost/Desktop/ld_layers/productivity/productivity.sld', workspace='productivity')
    # geo.publish_style(layer_name='productivity_clipped', style_name='erosion', workspace='productivity')

    array = dataset.read()
    
    width= dataset.width
    height= dataset.height
    area= width*height
    

    int_array = array.astype(np.int32)

    context={
        "int_array": int_array,
	"area": area,
    }
    return Response(context)


from rest_framework import serializers

class DataSerializer(serializers.Serializer):
    
    int_array= serializers.ListField(child=serializers.CharField())
    # area= serializers.StringRelatedField(many=True)

csrf_exempt
@api_view(['POST'])
@renderer_classes([JSONRenderer]) 
def shapeLoader(request):
    # model_type=''
    context={}
    if request.method == 'POST':
        file_path = glob.glob(r'/home/ghost/Documents/django/DjangoGEE (2)/DjangoGEE/media/uploads/*')
        for file in file_path:
            os.remove(str(file))
        
        shp = request.data['shp']
        shx = request.data['shx']
        dbf = request.data['dbf']
        prj = request.data['prj']
        ShapeFile.objects.create(shp=shp,shx=shx,dbf=dbf,prj=prj)
        selected=request.data['selected']
        src = fiona.open("/home/ghost/Documents/django/DjangoGEE (2)/DjangoGEE/media/uploads/"+str(shp))
        feature = src.next()
        bounds = rasterio.features.bounds(feature['geometry'])
        context['bound']=bounds
        # print("bounds:", bounds)
        if(selected=="carbon"):
            file_array = []
            with fiona.open("/home/ghost/Documents/django/DjangoGEE (2)/DjangoGEE/media/uploads/"+str(shp), "r") as shapefile:
                shapes = [feature["geometry"] for feature in src]
                
            with rasterio.open("/home/ghost/Desktop/ld_layers/carbon/soil_carbon.tif") as src:
                out_image, out_transform = rasterio.mask.mask(src, shapes, crop=True)
                out_meta = src.meta
            out_meta.update({"driver": "GTiff", "height": out_image.shape[1], "width": out_image.shape[2], "transform": out_transform})
            with rasterio.open("/home/ghost/Desktop/ld_layers/carbon/output/carbon_mask.tif", "w", **out_meta) as dest:
                dest.write(out_image)
            dataset = rasterio.open(r'/home/ghost/Desktop/ld_layers/carbon/output/carbon_mask.tif')
            geo = Geoserver('http://localhost:8088/geoserver', username='admin', password='geoserver')
            raster_path = glob.glob(r'/home/ghost/Desktop/ld_layers/carbon/output/carbon_mask.tif')
            for i in range(len(raster_path)):
                path=raster_path[i]
                geo.create_coveragestore(path=path, workspace='carbon')
            # geo.upload_style(path=r'/home/ghost/Desktop/ld_layers/carbon/carbon.sld', workspace='carbon',overwrite=True)
            # geo.publish_style(layer_name='carbon_mask', style_name='carbon', workspace='carbon')
            array = dataset.read()
            int_array = array.astype(np.int32)
            width= dataset .width
            hieght= dataset .height
            area= width*hieght
            for item in int_array[0]:
                for i in item:
                    file_array.append(i)
            context['model_type']='carbon'
            context['int_array']=file_array
            context['area']=area
            return Response(context, status=201,)
        elif(selected=='erosion'):
            file_array = []
            with fiona.open("/home/ghost/Documents/django/DjangoGEE (2)/DjangoGEE/media/uploads/"+str(shp), "r") as shapefile:
                shapes = [feature["geometry"] for feature in shapefile]

            with rasterio.open("/home/ghost/Desktop/ld_layers/erosion/erosion.tif") as src:
                out_image, out_transform = rasterio.mask.mask(src, shapes, crop=True)
                out_meta = src.meta
            out_meta.update({"driver": "GTiff", "height": out_image.shape[1], "width": out_image.shape[2], "transform": out_transform})
            with rasterio.open("/home/ghost/Desktop/ld_layers/erosion/output/erosion_masked.tif", "w", **out_meta) as dest:
                dest.write(out_image)
            dataset = rasterio.open(r'/home/ghost/Desktop/ld_layers/erosion/output/erosion_masked.tif')
            geo = Geoserver('http://localhost:8088/geoserver', username='admin', password='geoserver')
            raster_path = glob.glob(r'/home/ghost/Desktop/ld_layers/erosion/output/erosion_masked.tif')
            for i in range(len(raster_path)):
                path=raster_path[i]
                geo.create_coveragestore(path=path, workspace='erosion')
            # geo.upload_style(path=r'/home/ghost/Desktop/ld_layers/carbon/carbon.sld', workspace='carbon',overwrite=True)
            # geo.publish_style(layer_name='erosion_mask', style_name='erosion', workspace='erosion')
            array = dataset.read()
            int_array = array.astype(np.int8)
            width= dataset .width
            hieght= dataset .height
            area= width*hieght
            for item in int_array[0]:
                for i in item:
                    file_array.append(i)
            context['model_type']='erosion'
            context['int_array']=file_array
            context['area']=area

            return Response(context, status=201,)
        elif(selected=='moisture'):
            file_array = []
            with fiona.open("/home/ghost/Documents/django/DjangoGEE (2)/DjangoGEE/media/uploads/"+str(shp), "r") as shapefile:
                shapes = [feature["geometry"] for feature in shapefile]

            with rasterio.open("/home/ghost/Desktop/ld_layers/moisture/soil_moisture.tif") as src:
                out_image, out_transform = rasterio.mask.mask(src, shapes, crop=True)
                out_meta = src.meta
            out_meta.update({"driver": "GTiff", "height": out_image.shape[1], "width": out_image.shape[2], "transform": out_transform})
            with rasterio.open("/home/ghost/Desktop/ld_layers/moisture/output/moisture_masked.tif", "w", **out_meta) as dest:
                dest.write(out_image)
            dataset = rasterio.open(r'/home/ghost/Desktop/ld_layers/moisture/output/moisture_masked.tif')
            geo = Geoserver('http://localhost:8088/geoserver', username='admin', password='geoserver')
            raster_path = glob.glob(r'/home/ghost/Desktop/ld_layers/moisture/output/moisture_masked.tif')
            for i in range(len(raster_path)):
                path=raster_path[i]
                geo.create_coveragestore(path=path, workspace='moisture')
            # geo.upload_style(path=r'/home/ghost/Desktop/ld_layers/carbon/carbon.sld', workspace='carbon',overwrite=True)
            # geo.publish_style(layer_name='moisture_mask', style_name='moisture', workspace='moisture')
            array = dataset.read()
            int_array = array.astype(np.int8)
            width= dataset .width
            hieght= dataset .height
            area= width*hieght
            for item in int_array[0]:
                for i in item:
                    file_array.append(i)
            context['model_type']='moisture'
            context['int_array']=file_array
            context['area']=area

            return Response(context, status=201,)
        elif(selected=='productivity'):
            file_array = []
            with fiona.open("/home/ghost/Documents/django/DjangoGEE (2)/DjangoGEE/media/uploads/"+str(shp), "r") as shapefile:
                shapes = [feature["geometry"] for feature in shapefile]

            with rasterio.open("/home/ghost/Desktop/ld_layers/productivity/productivity.tif") as src:
                out_image, out_transform = rasterio.mask.mask(src, shapes, crop=True)
                out_meta = src.meta
            out_meta.update({"driver": "GTiff", "height": out_image.shape[1], "width": out_image.shape[2], "transform": out_transform})
            with rasterio.open("/home/ghost/Desktop/ld_layers/productivity/output/productivity_masked.tif", "w", **out_meta) as dest:
                dest.write(out_image)
            dataset = rasterio.open(r'/home/ghost/Desktop/ld_layers/productivity/output/productivity_masked.tif')
            geo = Geoserver('http://localhost:8088/geoserver', username='admin', password='geoserver')
            raster_path = glob.glob(r'/home/ghost/Desktop/ld_layers/productivity/output/productivity_masked.tif')
            for i in range(len(raster_path)):
                path=raster_path[i]
                geo.create_coveragestore(path=path, workspace='productivity')
            # geo.upload_style(path=r'/home/ghost/Desktop/ld_layers/carbon/carbon.sld', workspace='carbon',overwrite=True)
            # geo.publish_style(layer_name='productivity_mask', style_name='productivity', workspace='productivity')
            array = dataset.read()
            int_array = array.astype(np.int8)
            width= dataset .width
            hieght= dataset .height
            area= width*hieght
            for item in int_array[0]:
                for i in item:
                    file_array.append(i)
            context['model_type']='productivity'
            context['int_array']=file_array
            context['area']=area

            return Response(context, status=201,)
    else:
        return Response({'status':'get'}, status=201,)
    
   
    
   



csrf_exempt
@api_view(['GET'])
@renderer_classes([JSONRenderer]) 
def carbonShapefileMask():
    file_path = glob.glob(r'/home/ghost/Documents/django/DjangoGEE (2)/DjangoGEE/media/uploads/*')
    for file in file_path:
        os.remove(str(file))
    
    file_upload()
    with fiona.open("/home/ghost/Documents/django/DjangoGEE (2)/DjangoGEE/media/uploads/*.shp", "r") as shapefile:
        shapes = [feature["geometry"] for feature in shapefile]
    
    with rasterio.open("/home/ghost/Desktop/ld_layers/carbon/soil_carbon.tif") as src:
        out_image, out_transform = rasterio.mask.mask(src, shapes, crop=True)
        out_meta = src.meta

    # Save clipped imagery
    out_meta.update({"driver": "GTiff", "height": out_image.shape[1], "width": out_image.shape[2], "transform": out_transform})

    with rasterio.open("/home/ghost/Desktop/ld_layers/carbon/output/carbon_mask.tif", "w", **out_meta) as dest:
        dest.write(out_image)

    dataset = rasterio.open(r'/home/ghost/Desktop/ld_layers/carbon/output/carbon_mask.tif')
    geo = Geoserver('http://localhost:8088/geoserver', username='admin', password='geoserver')
    # geo.create_workspace(workspace='carbon')
    raster_path = glob.glob(r'/home/ghost/Desktop/ld_layers/carbon/output/carbon_mask.tif')
    for i in range(len(raster_path)):
        path=raster_path[i]
        geo.create_coveragestore(path=path, workspace='carbon')
    # geo.upload_style(path=r'/home/ghost/Desktop/ld_layers/carbon/carbon.sld', workspace='carbon')
    # geo.publish_style(layer_name='carbon_clipped', style_name='carbon', workspace='carbon')

    array = dataset.read()

    width= dataset.width
    hieght= dataset.height
    area= width*hieght
    int_array = array.astype(np.int16)

    context={
        "int_array": int_array,
	"area": area,

    }
    return Response(context)


csrf_exempt
@api_view(['GET'])
@renderer_classes([JSONRenderer]) 
def erosionShapefileMask(request):
    file_path = glob.glob(r'/home/ghost/Documents/django/DjangoGEE (2)/DjangoGEE/media/uploads/*')
    for file in file_path:
        os.remove(str(file))
    
    file_upload()
    with fiona.open("/home/ghost/Documents/django/DjangoGEE (2)/DjangoGEE/media/uploads/*.shp", "r") as shapefile:
        shapes = [feature["geometry"] for feature in shapefile]
    
    with rasterio.open("/home/ghost/Desktop/ld_layers/erosion/erosion.tif") as src:
        out_image, out_transform = rasterio.mask.mask(src, shapes, crop=True)
        out_meta = src.meta

    # Save clipped imagery
    out_meta.update({"driver": "GTiff", "height": out_image.shape[1], "width": out_image.shape[2], "transform": out_transform})

    with rasterio.open("/home/ghost/Desktop/ld_layers/erosion/output/erosion_mask.tif", "w", **out_meta) as dest:
        dest.write(out_image)

    dataset = rasterio.open(r'/home/ghost/Desktop/ld_layers/erosion/output/erosion_mask.tif')
    geo = Geoserver('http://localhost:8088/geoserver', username='admin', password='geoserver')
    # geo.create_workspace(workspace='erosion')
    raster_path = glob.glob(r'/home/ghost/Desktop/ld_layers/erosion/output/erosion_mask.tif')
    for i in range(len(raster_path)):
        path=raster_path[i]
        geo.create_coveragestore(path=path, workspace='erosion')
    # geo.upload_style(path=r'/home/ghost/Desktop/ld_layers/erosion/erosion.sld', workspace='erosion')
    # geo.publish_style(layer_name='erosion_mask', style_name='erosion', workspace='erosion')

    array = dataset.read()
    width= dataset.width
    hieght= dataset.height
    area= width*hieght
    int_array = array.astype(np.int8)

    context={
        "int_array": int_array,
	"area": area,

    }
    return Response(context)

csrf_exempt
@api_view(['GET'])
@renderer_classes([JSONRenderer]) 
def moistureShapefileMask(request):
    file_path = glob.glob(r'/home/ghost/Documents/django/DjangoGEE (2)/DjangoGEE/media/uploads/*')
    for file in file_path:
        os.remove(str(file))
    
    file_upload()
    with fiona.open("/home/ghost/Documents/django/DjangoGEE (2)/DjangoGEE/media/uploads/*.shp", "r") as shapefile:
        shapes = [feature["geometry"] for feature in shapefile]
    
    with rasterio.open("/home/ghost/Desktop/ld_layers/moisture/soil_moisture.tif") as src:
        out_image, out_transform = rasterio.mask.mask(src, shapes, crop=True)
        out_meta = src.meta

    # Save clipped imagery
    out_meta.update({"driver": "GTiff", "height": out_image.shape[1], "width": out_image.shape[2], "transform": out_transform})

    with rasterio.open("/home/ghost/Desktop/ld_layers/moisture/output/moisture_mask.tif", "w", **out_meta) as dest:
        dest.write(out_image)

    dataset = rasterio.open(r'/home/ghost/Desktop/ld_layers/moisture/output/moisture_mask.tif')
    geo = Geoserver('http://localhost:8088/geoserver', username='admin', password='geoserver')
    # geo.create_workspace(workspace='erosion')
    raster_path = glob.glob(r'/home/ghost/Desktop/ld_layers/moisture/output/moisture_mask.tif')
    for i in range(len(raster_path)):
        path=raster_path[i]
        geo.create_coveragestore(path=path, workspace='moisture')
    # geo.upload_style(path=r'/home/ghost/Desktop/ld_layers/moisture/moisture.sld', workspace='moisture')
    # geo.publish_style(layer_name='moisture_mask', style_name='moisture', workspace='moisture')

    array = dataset.read()

    width= dataset.width
    hieght= dataset.height
    area= width*hieght

    int_array = array.astype(np.int32)

    context={
        "int_array": int_array,
	"area": area,

    }
    return Response(context)

csrf_exempt
@api_view(['GET'])
@renderer_classes([JSONRenderer]) 
def productivityShapefileMask(request):

    file_path = glob.glob(r'/home/ghost/Documents/django/DjangoGEE (2)/DjangoGEE/media/uploads/*')
    for file in file_path:
        os.remove(str(file))
    
    file_upload()
    with fiona.open("/home/ghost/Documents/django/DjangoGEE (2)/DjangoGEE/media/uploads/*.shp", "r") as shapefile:
        shapes = [feature["geometry"] for feature in shapefile]
    
    with rasterio.open("/home/ghost/Desktop/ld_layers/productivity/productivity.tif") as src:
        out_image, out_transform = rasterio.mask.mask(src, shapes, crop=True)
        out_meta = src.meta

    # Save clipped imagery
    out_meta.update({"driver": "GTiff", "height": out_image.shape[1], "width": out_image.shape[2], "transform": out_transform})

    with rasterio.open("/home/ghost/Desktop/ld_layers/productivity/output/productivity_mask.tif", "w", **out_meta) as dest:
        dest.write(out_image)

    dataset = rasterio.open(r'/home/ghost/Desktop/ld_layers/productivity/output/productivity_mask.tif')
    geo = Geoserver('http://localhost:8088/geoserver', username='admin', password='geoserver')
    # geo.create_workspace(workspace='erosion')
    raster_path = glob.glob(r'/home/ghost/Desktop/ld_layers/productivity/output/productivity_mask.tif')
    for i in range(len(raster_path)):
        path=raster_path[i]
        geo.create_coveragestore(path=path, workspace='productivity')
    # geo.upload_style(path=r'/home/ghost/Desktop/ld_layers/productivity/productivity.sld', workspace='productivity')
    # geo.publish_style(layer_name='erosion_mask', style_name='productivity', workspace='productivity')

    array = dataset.read()

    width= dataset.width
    hieght= dataset.height
    area= width*hieght

    int_array = array.astype(np.int32)

    context={
        "int_array": int_array,
	"area": area,

    }
    return Response(context)

















