from rest_framework import serializers
from .models import ShapeFile
 
class ShapefileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ShapeFile
        fields = ['shx','shp','dbf','prj']