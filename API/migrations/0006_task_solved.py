# Generated by Django 3.1.3 on 2021-03-17 21:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0005_auto_20210318_0123'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='solved',
            field=models.BooleanField(default=False),
        ),
    ]
