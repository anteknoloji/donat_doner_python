from django.db import models

# Create your models here.
class Products(models.Model):
    ProductName = models.CharField(max_length = 255,null=False,default="",verbose_name="ProductName")
    ProductDesc = models.CharField(max_length = 255,null=False,default="",verbose_name="ProductDesc")

    def __str__(self):
        return self.ProductName