# png-compressor-cli
概述：
    png-compressor-cli是基于tiny(https://tinypng.com/)的交互式，png格式图片压缩工具

### 安装

```sh
npm i png-compressor-cli -g
```

### 使用

```sh
# 下载之后需要设置API key，才能使用
从官网获取账号的key https://tinify.com/dashboard/api
![Alt text](image.png)

tiny -i <key>

举例：
    tiny -i 2jxgPRqGtMQ0H3jCXr2FfvdJhFbSxxxx


# 默认会对当前目录下的所有png图片进行压缩
tiny


# 指定一个目录,对该目录下的所有png图片进行压缩
tiny -u <dir>

举例： 
    tiny -u ./demo



# 指定一个png文件压缩
tiny -f <file.png>

举例：
    tiny -u ./demo.png
```
