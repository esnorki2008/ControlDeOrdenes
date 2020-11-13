from django.shortcuts import render
from django.db.models import Q
from rest_framework import viewsets,filters,generics
from rest_framework import status
from .serializers import *
from rest_framework.response import Response
from .models import Hero,Vendedor,Producto,Venta
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer

class HeroViewSet(viewsets.ModelViewSet):
    queryset = Hero.objects.all().order_by('name')
    serializer_class = HeroSerializer

class VendedorViewSet(viewsets.ModelViewSet):
    queryset = Vendedor.objects.all().order_by('usuario')
    serializer_class = VendedorSerializer

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all().order_by('nombre')
    serializer_class = ProductoSerializer

class VentaViewSet(viewsets.ModelViewSet):
    queryset = Venta.objects.all().order_by('cod_producto_venta')
    serializer_class = VentaSerializer

@api_view(['GET', 'POST'])
#@renderer_classes((TemplateHTMLRenderer, JSONRenderer))
def UserCrud(request):
        """
        List all code snippets, or create a new snippet.
        """
        if request.method == 'GET':
            snippets = Vendedor.objects.all()
            serializer = UserQuerySerializer(snippets, many=True)
            return Response(serializer.data)

        elif request.method == 'POST':
            id = len(Vendedor.objects.all())
            value = (request.data).copy()
            value['cod_vendedor']=id
            value['id']=id
            serializer = UserQuerySerializer(data=value)
            
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    #usuario = ['usuario']
    #assword =['password']
    #filter_backends = (filters.SearchFilter,)
    #print('******************')
    #print(usuario)
    #print('******************')
    #queryset = Vendedor.objects.filter(Q(usuario=usuario))
    #serializer_class = QSerializer
