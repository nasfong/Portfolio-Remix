IMAGE_NAME=nasfong/remix-portfolio
TAG=latest

build:
	docker build -t $(IMAGE_NAME):$(TAG) .

push:
	docker push $(IMAGE_NAME):$(TAG)
