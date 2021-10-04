from rest_framework import routers
from .api import AdvertisementViewSet

router = routers.DefaultRouter()
router.register('api/advertisements', AdvertisementViewSet, 'advertisements')

urlpatterns = router.urls
