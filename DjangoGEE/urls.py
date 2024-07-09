
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from gee import views
from django.urls import  register_converter
from gee import selectionCoverage as v
from  gee import converts

register_converter(converts.FloatUrlParameterConverter, 'float')
urlpatterns = [
    path('admin/', admin.site.urls),
    path('by-clip/<float:lat1>/<float:lon1>/<float:lat2>/<float:lon2>',v.byCliping, name="byCliping"),
    path('file-upload',v.shapeLoader, name="file_upload"),




    path('carbon',views.org_car, name="carbon_all"),
    path('carbon-clip/<float:lat1>/<float:lon1>/<float:lat2>/<float:lon2>',views.carbon_clip, name="raster-clip"),
    path('erosion',views.erosion, name="erosion"),
    path('erosion-clip/<float:lat1>/<float:lon1>/<float:lat2>/<float:lon2>',views.erosion_clip, name="erosion_clip"),

    path('moisture',views.soil_moisture, name="soil_moisture"),
    path('moisture-clip/<float:lat1>/<float:lon1>/<float:lat2>/<float:lon2>',views.soil_moisture_clip, name="soil_moisture_clip"),

    path('productivity',views.soil_productivity, name="soil_productivity"),
    path('productivity-clip/<float:lat1>/<float:lon1>/<float:lat2>/<float:lon2>',views.soil_productivity_clip, name="soil_productivity_clip"),
    # path('file-upload',views.shapeLoader, name="file_upload"),
    path('carbonmask',views.carbonShapefileMask, name="carbon-mask"),
    path('erosionmask',views.erosionShapefileMask, name="erosion-mask"),
    path('moisturemask',views.moistureShapefileMask, name="moisture-mask"),
    path('productivitymask',views.productivityShapefileMask, name="productivity-mask"),
    
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)




