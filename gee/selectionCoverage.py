from importlib.resources import path
from django.shortcuts import render
from geo.Geoserver import Geoserver
import glob
import fiona
import rasterio
import rasterio.mask
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
import numpy as np
import geopandas as gpd
import gemgis as gg
from django.views.decorators.csrf import csrf_exempt
import os
from django.core import serializers
from .models import ShapeFile
import geopandas as gpd 
import shapely
context = {}
geo = Geoserver('http://localhost:8080/geoserver', username='admin', password='geoserver')
modelDataType = {
'carbon': np.int32,
'erosion' : np.int8,
'productivity' :np.int32,
'moisture' :np.int32
}

maskedPath = {
    'carbon':r'/home/ld/Documents/ld_layers/carbon/output/carbon_mask.tif',
'erosion' : r'/home/ld/Documents/ld_layers/erosion/output/erosion_mask.tif',
'productivity' : r'/home/ld/Documents/ld_layers/productivity/output/productivity_mask.tif',
'moisture' :r'/home/ld/Documents/ld_layers/moisture/output/moisture_mask.tif'
    
}
sldPath={
'carbon': r'/home/ld/Documents/ld_layers/sld/carbon.sld',
'erosion' : r'/home/ld/Documents/ld_layers/sld/erosion.sld',
'productivity' :r'/home/ld/Documents/ld_layers/sld/productivity.sld',
'moisture' :r'/home/ld/Documents/ld_layers/sld/moisture.sld'
}
outputPathswithoutr = {
'carbon': r'/home/ld/Documents/ld_layers/carbon/output/carbon_clipped.tif',
'erosion' : r'/home/ld/Documents/ld_layers/erosion/output/erosion_clipped.tif',
'productivity' :r'/home/ld/Documents/ld_layers/productivity/output/productivity_clipped.tif',
'moisture' :r'/home/ld/Documents/ld_layers/moisture/output/moisture_clipped.tif' 
}
inputPaths={
'carbon': r'/home/ld/Documents/ld_layers/carbon/soil_carbon.tif',
'erosion' : r'/home/ld/Documents/ld_layers/erosion/soil_erosion.tif',
'productivity' :r'/home/ld/Documents/ld_layers/productivity/soil_productivity.tif',
'moisture' :r'/home/ld/Documents/ld_layers/moisture/soil_moisture.tif'
}
uplod_files="/home/ld/Documents/django/django/media/uploads/"
ld_layers = "/home/ld/Documents/ld_layers/"


outputPaths = {
'carbon': r'/home/ld/Documents/ld_layers/carbon/output/carbon.tif',
'erosion' : r'/home/ld/Documents/ld_layers/erosion/output/erosion.tif',
'productivity' :r'/home/ld/Documents/ld_layers/productivity/output/productivity.tif',
'moisture' :r'/home/ld/Documents/ld_layers/moisture/output/moisture.tif' 
}
frontSelected= {
   "Soil Carbon" :'carbon',
"Erosion" :'erosion' ,
 "Moisture":'moisture',
'Productivity' :"productivity"
    
}

outputPathswithout = {
'carbon': '/home/ld/Documents/ld_layers/carbon/output/carbon_clipped.tif',
'erosion' : '/home/ld/Documents/ld_layers/erosion/output/erosion_clipped.tif',
'productivity' :'/home/ld/Documents/ld_layers/productivity/output/productivity_clipped.tif',
'moisture' :'/home/ld/Documents/ld_layers/moisture/output/moisture_clipped.tif' 
}


frequencylist = {}

def countFreq(arr, n):
    frequencyarray = []
    visited = [False for i in range(n)]
    for i in range(n):
        if (visited[i] == True):
            continue
        count = 1
        for j in range(i + 1, n, 1):
            if (arr[i] == arr[j]):
                visited[j] = True
                count += 1
        frequencylist['pixel']=arr[i]
        frequencylist['frequency']=count
        # frequencylist.append({arr[i]:count})
        frequencyarray.append({'pixel':arr[i],'frequent':count})
    # print(frequencyarray)
    return frequencyarray

def getEachPixelValue(array,key,pixelArea):
    eachPixel = []
    list_of_area={}
    list_of_histograms=[]
    total_low = 0
    total_middile = 0
    total_high = 0
    total_very_high = 0
    total_very_highh= 0


               

    if(key=='carbon'):
        for pixels in array:
            for pixel in pixels:
                for index,p in enumerate(pixel):
                    if ((p >= 0) & (p <= 10)).all():
                            total_low+=1
                    if ((p >= 11) & (p <= 20)).all():
                            total_middile +=1
                    if ((p >= 21) & (p <= 49)).all():
                            total_high+=1
                    if  p>50:
                            total_very_high +=1
                    list_of_area['very low']=(total_low*pixelArea)*0.0001
                    list_of_area['low']=(total_middile*pixelArea)*0.0001
                    list_of_area['moderate']=(total_high*pixelArea)*0.0001
                    list_of_area['high']=(total_very_high*pixelArea)*0.0001
                    if(p >= 0):
                            list_of_histograms.append(p)
        frequency_list = countFreq(list_of_histograms,len(list_of_histograms))
    
        

    if(key=='erosion'):
        for pixels in array:
            for pixel in pixels:
                for index,p in enumerate(pixel):
                    if ((p >= 0) & (p <= 2)).all(): 
                            total_low+=1
                    if ((p >= 3) & (p <= 10)).all():
                        total_middile +=1
                    if ((p >= 11) & (p <= 20)).all():
                        total_high+=1
                    if ((p >= 21) & (p <= 49)).all():
                        total_very_high +=1
                    if  p>=50:
                        total_very_highh +=1
                    if(p >= 0):
                        list_of_histograms.append(p)
                    list_of_area['very low']=(total_low*pixelArea)*0.0001
                    list_of_area['low']=(total_middile*pixelArea)*0.0001
                    list_of_area['moderate']=(total_high*pixelArea)*0.0001
                    list_of_area['severe']=(total_very_high*pixelArea)*0.0001
                    list_of_area['very severe']=(total_very_highh*pixelArea)*0.0001
        frequency_list = countFreq(list_of_histograms,len(list_of_histograms))
    
        

    if(key=='moisture'):
        for pixels in array:
            for pixel in pixels:
                for index,p in enumerate(pixel):
                    if p in np.arange(0, 0.299):
                            total_low+=1
                    if p in np.arange(0.3, 0.6):
                        total_middile +=1
                    if p in np.arange(0.71, 1.0):
                        total_high+=1
                    if p>1.0:
                        total_very_high +=1
                    if(p >= 0):
                        list_of_histograms.append(p)
                    list_of_area['deficit']=(total_low*pixelArea)*0.0001
                    list_of_area['limiting']=(total_middile*pixelArea)*0.0001
                    list_of_area['adequate']=(total_high*pixelArea)*0.0001
                    list_of_area['surplus']=(total_very_high*pixelArea)*0.0001
        frequency_list = countFreq(list_of_histograms,len(list_of_histograms))
    
                    
                    
        

    if(key=='productivity'):
        for pixels in array:
            for pixel in pixels:
                for index,p in enumerate(pixel):
                    if p in np.arange(0, 0.2):
                            total_low+=1
                    if p in np.arange(0.21, 0.4):
                        total_middile +=1
                    if p in np.arange(0.41, 0.6):
                        total_high+=1
                    if p in np.arange(0.61, 0.8):
                        total_very_high+=1
                    if p in np.arange(0.81, 1):
                        total_very_highh+=1
                    if(p >= 0):
                        list_of_histograms.append(p)
                    list_of_area['very low']=(total_low*pixelArea)*0.0001
                    list_of_area['low']=(total_middile*pixelArea)*0.0001
                    list_of_area['moderate low']=(total_high*pixelArea)*0.0001
                    list_of_area['moderatley high']=(total_very_high*pixelArea)*0.0001
                    list_of_area['high']=(total_very_highh*pixelArea)*0.0001
        frequency_list = countFreq(list_of_histograms,len(list_of_histograms))
    # print(sorted(frequency_list, key=lambda x: x['pixel']))
    eachPixel.append({'area':list_of_area,'histograms':sorted(frequency_list, key=lambda x: x['pixel']),"isVisible":True})             
    return eachPixel


def getMasked(model):
    for key, value in maskedPath.items():
        if(key==model):
            return value


def convertFrontRequest(model):
    for key, value in frontSelected.items():
        if(key==model):
            return value

def selectModelPath(model):
    for key, value in inputPaths.items():
        if(key==model):
            return value

def selectedStylePath(model):
    for key, value in sldPath.items():
        if(key==model):
            return value


def getOutputPath(model):
    for key, value in outputPathswithout.items():
        if(key==model):
            return value


def getOutputPathr(model):
    for key, value in outputPathswithoutr.items():
        if(key==model):
            return value


def getDataType(model):
    for key, value in modelDataType.items():
        if(key==model):
            return value


def geoServerPublisher(model,clipType):
    if clipType=='clipped':
        raster_path = glob.glob(getOutputPathr(model))
    if clipType=='masked':
         raster_path = glob.glob(getMasked(model))
    for i in range(len(raster_path)):
        path=raster_path[i]
        css = geo.get_coveragestores()
        for d in css['coverageStores']['coverageStore']:
            if clipType=='clipped':
                if(d['name'].split('_')[1]+'_clipped'==model+'_clipped'):
                    geo.delete_coveragestore(coveragestore_name=model+'_clipped', workspace=clipType)
                geo.create_coveragestore(path=path, workspace=clipType)
                geo.publish_style(layer_name=model+'_clipped', style_name=model, workspace=clipType)
            if clipType=='masked':
                if(d['name']==model+'_masked'):
                    geo.delete_coveragestore(coveragestore_name=model+'_masked', workspace=clipType)
                geo.create_coveragestore(path=path, workspace=clipType)
                geo.publish_style(layer_name=model+'_mask', style_name=model, workspace=clipType)
        

       

def genrateAnalysisData(dataset):
    int_array = {}
    pixelData = {}
    for key, value in dataset.items():
        array = value.read()

        # Convert the array elements to strings
        # arr_str = array.astype(str)
        int_array[key] = array.astype(str)
        # Remove the 'e' character and keep the numbers before it
        int_array[key] = np.array([val.split('e')[0] for val in int_array[key].flat], dtype=np.float32)
        int_array[key] = int_array[key].reshape(array.shape)
        int_array[key]  = np.round(int_array[key] , decimals=2)



        
        pixelarea=value.width*value.height
        pixelData[key]=getEachPixelValue(int_array[key],key,pixelarea)
       
    context['pixelData']=pixelData
    return context



csrf_exempt
@api_view(['POST'])
@renderer_classes([JSONRenderer]) 
def byCliping(request,lat1,lon1,lat2,lon2):
    clipped_models ={}
    dataset={}
    if request.method=='POST':
        for model in request.data['modelSelection'].split(','):
            rasterPath = selectModelPath(convertFrontRequest(model))
            raster = rasterio.open(str(rasterPath))
            bbox = [lat1,lat2,lon1,lon2]  
            clipped_models[convertFrontRequest(model)]=gg.raster.clip_by_bbox(raster=raster,bbox=bbox, save_clipped_raster=True,path=getOutputPathr(convertFrontRequest(model)), overwrite_file=True)
            geoServerPublisher(convertFrontRequest(model),'clipped')
            dataset[convertFrontRequest(model)]=rasterio.open(getOutputPath(convertFrontRequest(model)))
        result = genrateAnalysisData(dataset)
        return Response(result)


csrf_exempt
@api_view(['POST'])
@renderer_classes([JSONRenderer]) 
def shapeLoader(request):
    if request.method == 'POST':
        dataset={}
        file_path = glob.glob(r'/home/ld/Documents/django/django/media/uploads/*')
        for file in file_path:
            os.remove(str(file))
    shp = request.data['shp']
    shx = request.data['shx']
    dbf = request.data['dbf']
    prj = request.data['prj']
    import ast
    selectedModels = ast.literal_eval(request.data['selected'])
    # print(selectedModels)
    ShapeFile.objects.create(shp=shp,shx=shx,dbf=dbf,prj=prj)
    src = fiona.open("/home/ld/Documents/django/django/media/uploads/"+str(shp))
    feature = src.next()
    bounds = rasterio.features.bounds(feature['geometry'])
    context['bound']=bounds
    for selectedModel in selectedModels:
        # print(selectedModel)
        with fiona.open(uplod_files+str(shp), "r") as shapefile:
                shapes = [feature["geometry"] for feature in shapefile]
        with rasterio.open(ld_layers+selectedModel+"/soil_"+selectedModel+".tif") as src:
                out_image, out_transform = rasterio.mask.mask(src, shapes, crop=False)
        out_meta = src.meta
        out_meta.update({"driver": "GTiff", "height": out_image.shape[1], "width": out_image.shape[2], "transform": out_transform})
        with rasterio.open(ld_layers+selectedModel+"/output/"+selectedModel+"_mask.tif", "w", **out_meta) as dest:
                dest.write(out_image)
        dataset[selectedModel]=rasterio.open(getMasked(selectedModel))
        raster_path = glob.glob(getMasked(selectedModel))
        geoServerPublisher(selectedModel,'masked')
    result = genrateAnalysisData(dataset)
        
    return Response(result)
  