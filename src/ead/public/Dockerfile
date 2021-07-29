FROM nginx:1.21.1

# During development, we want to change the file and see our changes without taking the hassle of rebuilding
# the container. So, instead of copying the source codes in the image and building it, we bind mount the source
# so that we can update the files and see our changes then and there. During release, we will uncomment this line
# as then, we want to copy all the files and build the image with the sources in it.

# COPY . /usr/share/nginx/html
