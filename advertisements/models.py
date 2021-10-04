from django.db import models

# Create your models here.
class Advertisement(models.Model):
    title = models.CharField(max_length=40)
    description = models.CharField(max_length=125)
    advertiser = models.EmailField(max_length=254)
    created_at = models.DateTimeField(auto_now_add=True)

