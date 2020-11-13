from rest_framework import serializers

from .models import Hero,Vendedor,Venta,Producto

class HeroSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Hero
        fields = ('name', 'alias')

class VendedorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Vendedor
        fields = ('cod_vendedor','usuario','password')

class VendedorDataSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Vendedor
        fields = ('cod_vendedor','usuario')

class ProductoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Producto
        fields = ('cod_producto','nombre','descripcion','precio','cod_vendedor_producto')

class VentaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Venta
        fields = ('cod_producto_venta','cod_vendedor_venta')

class UserQuerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendedor
        fields = '__all__'