FROM python:3.9-alpine
ENV PYTHONUNBUFFERED 1
WORKDIR /django
COPY requirements.txt requirements.txt
#RUN apt-get install software-properties-common
#RUN add-apt-repository ppa:ubuntugis/ppa
#RUN apt update -y; sudo apt upgrade -y;
#RUN apt install gdal-bin libgdal-dev
RUN pip install --upgrade pip
#RUN pip3 install pygdal=="`gdal-config --version`.*"
RUN pip3 install -r requirements.txt
COPY . .
