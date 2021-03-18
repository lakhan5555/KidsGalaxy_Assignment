# Generated by Django 3.1.3 on 2021-03-17 19:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('task_title', models.CharField(max_length=200, null=True)),
                ('due_date', models.DateTimeField(null=True)),
                ('name', models.CharField(max_length=200, null=True)),
                ('username', models.CharField(max_length=200, null=True)),
                ('email', models.EmailField(max_length=254, null=True)),
                ('phone', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
    ]
