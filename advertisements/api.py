from advertisements.models import Advertisement
from rest_framework import viewsets, permissions
from .serializers import AdvertisementSerializer

class AdvertisementViewSet(viewsets.ModelViewSet):
    queryset = Advertisement.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AdvertisementSerializer

