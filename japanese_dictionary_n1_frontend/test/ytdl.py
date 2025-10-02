from pytubefix import YouTube
from pytubefix.cli import on_progress


savePath = "./test/temp"

# url = "https://youtu.be/Gj6XtEln2zc?si=3G2h9QNpJOC6zKUy"
# url = "https://youtu.be/zQz9yrVgad4?si=bxXzSjtrOnBXnYOH"
url = "https://youtu.be/vhSbOzxB3_Q?si=heb1yWu2P9aWNRSX"

yt = YouTube(url, on_progress_callback = on_progress)
# print(yt.title)

ys = yt.streams.get_audio_only()
ys.download(savePath)