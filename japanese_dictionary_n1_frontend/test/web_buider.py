with open("test/template.html", 'r') as f:
    data1 = f.read()

with open("test/template2.html", 'r') as f:
    data2 = f.read()

print(data1.find("<title>Document</title>"))
print(data1[146])

# with open("test/web_build_test.html", 'w') as f:
#     f.write(data)