# import numpy as np
import cv2

# Set width and height of image
width, height = 256, 256

# Create black image with shape (height, width, 1) and data type uint8
img = np.zeros((height, width, 1), np.uint8)

# Save image as PNG
cv2.imwrite('black_mask.png', img)


