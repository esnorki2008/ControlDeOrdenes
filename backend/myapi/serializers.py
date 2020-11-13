from rest_framework import serializers

from .models import Vendedor,Venta,Producto



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

class ProductQuerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'

class SalesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venta
        fields = '__all__'