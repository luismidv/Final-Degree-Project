from rest_framework.routers import DefaultRouter
from core.api.urls import post_router
from django.urls import path,include

router = DefaultRouter()

#core 
router.registry.extend(post_router.registry)

urlpatterns = [
    path('', include(router.urls))
]