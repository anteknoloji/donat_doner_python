from django.urls import path, include
from .views import (
    ProductListApiView,
)

urlpatterns = [
    path('products/', ProductListApiView.as_view()),
]