import sys
import time

from neopixel import *

# LED strip configuration:
LED_COUNT      = 16      # Number of LED pixels.
LED_PIN        = 18      # GPIO pin connected to the pixels (must support PWM!).
LED_FREQ_HZ    = 800000  # LED signal frequency in hertz (usually 800khz)
LED_DMA        = 5       # DMA channel to use for generating signal (try 5)
LED_BRIGHTNESS = 255     # Set to 0 for darkest and 255 for brightest
LED_INVERT     = False   # True to invert the signal (when using NPN transistor level shift)

# Create NeoPixel object with appropriate configuration.
strip = Adafruit_NeoPixel(LED_COUNT, LED_PIN, LED_FREQ_HZ, LED_DMA, LED_INVERT, LED_BRIGHTNESS)
# Intialize the library (must be called once before other functions).
strip.begin()

for i in range(0, strip.numPixels()):
    strip.setPixelColorRGB(i, 214, 29, 125)
strip.show()
time.sleep(0.2)
for i in range(0, strip.numPixels()):
    strip.setPixelColorRGB(i, 0, 0, 0)
strip.show()
time.sleep(0.2)
for i in range(0, strip.numPixels()):
    strip.setPixelColorRGB(i, 214, 29, 125)
strip.show()
time.sleep(0.2)
for i in range(0, strip.numPixels()):
    strip.setPixelColorRGB(i, 0, 0, 0)
strip.show()
time.sleep(0.2)

while 1:
    line = input()
    print line
    led, r, b, g = line
    strip.setPixelColorRGB(led, r, b, g)
    strip.show()
