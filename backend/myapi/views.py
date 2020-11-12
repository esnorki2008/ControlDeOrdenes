from django.shortcuts import render

from rest_framework import viewsets

from .serializers import HeroSerializer
from .models import Hero,Vendedor,Producto,Venta


class HeroViewSet(viewsets.ModelViewSet):
    queryset = Hero.objects.all().order_by('name')
    serializer_class = HeroSerializer

class VendedorViewSet(viewsets.ModelViewSet):
    queryset = Vendedor.objects.all().order_by('usuario')
    serializer_class = HeroSerializer

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all().order_by('nombre')
    serializer_class = HeroSerializer

class VentaViewSet(viewsets.ModelViewSet):
    queryset = Venta.objects.all().order_by('cod_producto_venta')
    serializer_class = HeroSerializer