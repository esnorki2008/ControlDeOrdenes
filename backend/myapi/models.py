from django.db import models
# python3 manage.py makemigrations
# python3 manage.py migrate
class Hero(models.Model):
    name = models.CharField(max_length=60)
    alias = models.CharField(max_length=60)
    
    def __str__(self):
        return self.name


class Vendedor(models.Model):
    cod_vendedor = models.IntegerField()
    usuario = models.CharField(max_length=60)
    password = models.CharField(max_length=60)
    
    def __str__(self):
        return self.usuario

class Producto(models.Model):
    cod_producto = models.IntegerField()
    nombre = models.CharField(max_length=60)
    descripcion = models.CharField(max_length=120)
    precio = models.IntegerField()
    cod_vendedor_producto = models.ForeignKey(Vendedor,on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre

class Venta(models.Model):
    cod_producto_venta = models.ForeignKey(Producto,on_delete=models.CASCADE)
    cod_vendedor_venta = models.ForeignKey(Vendedor,on_delete=models.CASCADE)

    def __str__(self):
        return str(self.cod_producto_venta)
