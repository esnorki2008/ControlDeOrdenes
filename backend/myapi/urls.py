# myapi/urls.py
from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'vendedor', views.VendedorViewSet)
router.register(r'venta', views.VentaViewSet)
router.register(r'producto', views.ProductoViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('login/', views.UserLogin),
    path('user/', views.UserCrud),
    path('product/', views.ProductCrud),
    path('sales/', views.SalesCrud),
    path('statistics/', views.Statistics)
]
