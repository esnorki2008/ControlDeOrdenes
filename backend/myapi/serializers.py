from rest_framework import serializers

from .models import Hero,Vendedor,Venta,Producto

class HeroSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Hero
        fields = ('name', 'alias')

class VendedorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Vendedor
        fields = ('usuario')

class ProductoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Producto
        fields = ('nombre')

class VentaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Venta
        fields = ('cod_producto_venta')