from django.db import models

# Create your models here.

class ShapeFile(models.Model):
    shp = models.FileField(upload_to ='uploads/')
    shx = models.FileField(upload_to ='uploads/')
    prj = models.FileField(upload_to ='uploads/')
    dbf = models.FileField(upload_to ='uploads/')

    def str(self):
        return self.id