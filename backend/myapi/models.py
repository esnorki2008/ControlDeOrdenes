from django.db import models
# python3 manage.py makemigrations
# python3 manage.py migrate



class Vendedor(models.Model):
    cod_vendedor = models.IntegerField(default=0)
    usuario = models.CharField(max_length=60)
    password = models.CharField(max_length=60)
    
    def cod(self):
        return self.cod_vendedor
    
    def name(self):
        return self.usuario
    
    def __str__(self):
        return str(self.id)

class Producto(models.Model):
    cod_producto = models.IntegerField(default=0)
    nombre = models.CharField(max_length=60)
    descripcion = models.CharField(max_length=120)
    precio = models.IntegerField()
    cod_vendedor_producto = models.ForeignKey(Vendedor,on_delete=models.CASCADE)

    def __str__(self):
        return str(self.id)

class Venta(models.Model):
    cod_producto_venta = models.ForeignKey(Producto,on_delete=models.CASCADE)
    cod_vendedor_venta = models.ForeignKey(Vendedor,on_delete=models.CASCADE)

    def __str__(self):
        return str(self.cod_producto_venta)
