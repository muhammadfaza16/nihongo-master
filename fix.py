import json
import os

wb_path = 'src/views/workbook.js'
with open(wb_path, 'rb') as f:
    wb = f.read()
with open(wb_path, 'wb') as f:
    f.write(wb.replace(b'\r\n', b'\n'))

idx_path = 'src/data/chapter_index.js'
with open(idx_path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('"locked": false', '"locked": true')
content = content.replace(
    '"id": 0,\n    "title": "Chapter 0: Fondasi Nol Besar (Sistem Tulisan & Pelafalan)",\n    "desc": "Sebelum menyentuh Bab 1 Minna No Nihongo, Anda WAJIB menguasai sistem tulisan (Hiragana & Katakana) serta aturan dasar pelafalan bahasa Jepang.",\n    "locked": true',
    '"id": 0,\n    "title": "Chapter 0: Fondasi Nol Besar (Sistem Tulisan & Pelafalan)",\n    "desc": "Sebelum menyentuh Bab 1 Minna No Nihongo, Anda WAJIB menguasai sistem tulisan (Hiragana & Katakana) serta aturan dasar pelafalan bahasa Jepang.",\n    "locked": false'
)

with open(idx_path, 'w', encoding='utf-8') as f:
    f.write(content)
