from django.shortcuts import render
from django.db.models import Q
from rest_framework import viewsets,filters,generics
from rest_framework import status
from .serializers import *
from rest_framework.response import Response
from .models import Vendedor,Producto,Venta
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer



class VendedorViewSet(viewsets.ModelViewSet):
    queryset = Vendedor.objects.all().order_by('usuario')
    serializer_class = VendedorSerializer

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all().order_by('nombre')
    serializer_class = ProductoSerializer

class VentaViewSet(viewsets.ModelViewSet):
    queryset = Venta.objects.all().order_by('cod_producto_venta')
    serializer_class = VentaSerializer

@api_view(['POST'])
#@renderer_classes((TemplateHTMLRenderer, JSONRenderer))
def UserLogin(request):  
        if request.method == 'POST':
            #snippets = Vendedor.objects.all()
            value = (request.data).copy()
            user = value.get('usuario')
            passw = value.get('password')
            snippets = Vendedor.objects.filter(usuario=user,password=passw)
            serializer = UserQuerySerializer(snippets, many=True)
            print(request)
            if len(serializer.data) >= 1:
                for each in snippets:
                    print(each.cod())
                    return Response({'userId':(int(each.cod())),'userIdReal':(int(str(each))),'name':each.name() })                
            else:
                return Response({'status':'error'},status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def Statistics(request):  
        if request.method == 'POST':
            value = (request.data).copy()
            user = value.get('user')
            print(user)
           
            productLst = Producto.objects.filter(cod_vendedor_producto=user)
            rep1 = []
            earned = 0
            average = 0
            for product in productLst:
                    price = product.price()
                    productId = int(str(product))
                    name = product.name()
                    salesLst = Venta.objects.filter(cod_producto_venta=productId)
                    size = len(salesLst)
                    rep1.append({'id':productId,'name':name,'total': price * size})
                    average = average + price
                    earned = earned + price * size
            rep2={'total': earned}
            amou = len(productLst)
            if amou > 0:
                average = average / len(productLst)
            rep3={'total': average}
            return Response({'u':rep1,'d':rep2,'t':rep3})


@api_view(['POST'])
#@renderer_classes((TemplateHTMLRenderer, JSONRenderer))
def UserCrud(request):
       
        

        if request.method == 'POST':
            id = len(Vendedor.objects.all())
            value = (request.data).copy()
            value['cod_vendedor']=id
            value['id']=id
            serializer = UserQuerySerializer(data=value)
            
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST', 'DELETE','PUT'])
def ProductCrud(request):
       
        if request.method == 'GET':
            snippets = Producto.objects.all()
            serializer = ProductQuerySerializer(snippets, many=True)
            return Response(serializer.data)
           

        elif request.method == 'POST':
            max = 0
            for cada in Producto.objects.all():
                if max<cada.cod_producto:
                    max = cada.cod_producto
            id = max + 1
            value = (request.data).copy()
            value['cod_producto']=id
            value['id']=id

            cod_vendedor_producto = value.get('cod_vendedor_producto')
            serializer = ProductQuerySerializer(data=value)
            try:
                var = Vendedor.objects.get(cod_vendedor=cod_vendedor_producto)
                vende=int(str(var))
                value['cod_vendedor_producto']=vende
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except:
                return Response({'response','error'}, status=status.HTTP_400_BAD_REQUEST)
            
            
        
        elif request.method == 'PUT':
            value = (request.data).copy()
            serializer = ProductQuerySerializer(data=value)
            print(value)
            try:
                field = Producto.objects.get(cod_producto=value.get('cod_producto'))
                cod_vendedor_producto = value.get('cod_vendedor_producto')
                var = Vendedor.objects.get(cod_vendedor=cod_vendedor_producto)
                vende=int(str(var))
                value['cod_vendedor_producto']=vende
                if serializer.is_valid():
                    field.precio = value.get("precio") 
                    field.descripcion = value.get("descripcion")
                    field.nombre = value.get("nombre")
                    field.save()
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except:
                return Response({'response','error'}, status=status.HTTP_400_BAD_REQUEST)


        elif request.method == 'DELETE':
            value = (request.data).copy()
            print(value)
            cod_pro = value.get("cod_producto")
            try:
                instance = Producto.objects.get(cod_producto=cod_pro)
                instance.delete()
                return Response({'response','ok'})
            except:
                return Response({'response','error'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def SalesCrud(request):
       
        if request.method == 'GET':
            snippets = Venta.objects.all()
            serializer = SalesSerializer(snippets, many=True)
            return Response(serializer.data)

        elif request.method == 'POST':
            value = (request.data).copy()
            cod_producto_venta = value.get('cod_producto_venta')
            cod_vendedor_venta = value.get('cod_vendedor_venta')
            try:
                var = Vendedor.objects.get(cod_vendedor=cod_vendedor_venta)
                vende=int(str(var))
                var = Producto.objects.get(cod_producto=cod_producto_venta)
                produ=int(str(var))
                
                value['cod_vendedor_venta']=vende
                value['cod_producto_venta']=produ
                serializer = SalesSerializer(data=value)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except:
                return Response({'response','error'}, status=status.HTTP_400_BAD_REQUEST)
