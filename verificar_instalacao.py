"""
Script para verificar se a instalação modular do ELIS foi feita corretamente
"""

import os
from pathlib import Path

print("="*70)
print("🔍 VERIFICAÇÃO DA INSTALAÇÃO MODULAR - ELIS ELEVENTY")
print("="*70)

# Diretório base
BASE_DIR = "src"

# Arquivos esperados
expected_files = {
    "Sections (src/_includes/sections/)": [
        os.path.join(BASE_DIR, "_includes", "sections", "hero.njk"),
        os.path.join(BASE_DIR, "_includes", "sections", "about.njk"),
        os.path.join(BASE_DIR, "_includes", "sections", "deliverables.njk"),
        os.path.join(BASE_DIR, "_includes", "sections", "research.njk"),
        os.path.join(BASE_DIR, "_includes", "sections", "support.njk"),
    ],
    "Partials (src/_includes/partials/)": [
        os.path.join(BASE_DIR, "_includes", "partials", "footer.njk"),
        os.path.join(BASE_DIR, "_includes", "partials", "header.njk"),
        os.path.join(BASE_DIR, "_includes", "partials", "main-nav.njk"),
    ],
    "Pages (src/pages/)": [
        os.path.join(BASE_DIR, "pages", "index.njk"),
        os.path.join(BASE_DIR, "pages", "privacy.md"),
        os.path.join(BASE_DIR, "pages", "legal.md"),
    ],
    "CSS (src/assets/css/)": [
        os.path.join(BASE_DIR, "assets", "css", "global.css"),
    ],
    "Backup (src/pages/)": [
        os.path.join(BASE_DIR, "pages", "index.njk.old"),
    ]
}

# Verificar se estamos no diretório correto
if not os.path.exists(BASE_DIR):
    print(f"\n❌ ERRO: Pasta '{BASE_DIR}' não encontrada!")
    print("   Execute este script na pasta raiz do projeto elis-eleventy")
    print("   Exemplo: C:\\Users\\carlo\\elis-eleventy\\")
    exit(1)

print(f"\n✅ Pasta base encontrada: {os.path.abspath(BASE_DIR)}")

# Verificar estrutura de pastas
print("\n" + "="*70)
print("📂 VERIFICAÇÃO DE PASTAS")
print("="*70)

folders_to_check = [
    os.path.join(BASE_DIR, "_includes", "sections"),
    os.path.join(BASE_DIR, "_includes", "partials"),
    os.path.join(BASE_DIR, "pages"),
    os.path.join(BASE_DIR, "assets", "css"),
]

all_folders_ok = True
for folder in folders_to_check:
    if os.path.exists(folder):
        print(f"✅ {folder}")
    else:
        print(f"❌ {folder} - FALTANDO!")
        all_folders_ok = False

# Verificar arquivos
print("\n" + "="*70)
print("📄 VERIFICAÇÃO DE ARQUIVOS")
print("="*70)

all_files_ok = True
total_files = 0
found_files = 0

for category, files in expected_files.items():
    print(f"\n{category}")
    for file_path in files:
        total_files += 1
        if os.path.exists(file_path):
            # Verificar tamanho do arquivo
            size = os.path.getsize(file_path)
            if size > 0:
                print(f"  ✅ {os.path.basename(file_path)} ({size} bytes)")
                found_files += 1
            else:
                print(f"  ⚠️  {os.path.basename(file_path)} (arquivo vazio!)")
                all_files_ok = False
        else:
            print(f"  ❌ {os.path.basename(file_path)} - FALTANDO!")
            all_files_ok = False

# Verificar conteúdo do index.njk
print("\n" + "="*70)
print("📋 VERIFICAÇÃO DO INDEX.NJK")
print("="*70)

index_path = os.path.join(BASE_DIR, "pages", "index.njk")
if os.path.exists(index_path):
    with open(index_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Verificar se contém os includes corretos
    required_includes = [
        'include "sections/hero.njk"',
        'include "sections/about.njk"',
        'include "sections/deliverables.njk"',
        'include "sections/research.njk"',
        'include "sections/support.njk"',
        'include "partials/footer.njk"',
    ]
    
    index_ok = True
    for include in required_includes:
        if include in content:
            print(f"  ✅ {include}")
        else:
            print(f"  ❌ {include} - FALTANDO!")
            index_ok = False
else:
    print("  ❌ index.njk não encontrado!")
    index_ok = False

# Verificar CSS do global.css
print("\n" + "="*70)
print("🎨 VERIFICAÇÃO DO CSS")
print("="*70)

css_path = os.path.join(BASE_DIR, "assets", "css", "global.css")
if os.path.exists(css_path):
    with open(css_path, 'r', encoding='utf-8') as f:
        css_content = f.read()
    
    # Verificar se contém CSS das sections
    css_markers = [
        '.section-about',
        '.about-cards',
        '.deliverables-grid',
        '.section-research',
        '.section-support',
        '.site-footer',
    ]
    
    css_ok = True
    for marker in css_markers:
        if marker in css_content:
            print(f"  ✅ {marker} encontrado")
        else:
            print(f"  ❌ {marker} - FALTANDO!")
            css_ok = False
else:
    print("  ❌ global.css não encontrado!")
    css_ok = False

# Resumo final
print("\n" + "="*70)
print("📊 RESUMO DA VERIFICAÇÃO")
print("="*70)

print(f"\n📂 Pastas: {'✅ OK' if all_folders_ok else '❌ INCOMPLETO'}")
print(f"📄 Arquivos: {found_files}/{total_files} encontrados")
print(f"📋 Index.njk: {'✅ OK' if index_ok else '❌ INCOMPLETO'}")
print(f"🎨 CSS: {'✅ OK' if css_ok else '❌ INCOMPLETO'}")

# Resultado final
print("\n" + "="*70)
if all_folders_ok and all_files_ok and index_ok and css_ok:
    print("✅ INSTALAÇÃO COMPLETA E CORRETA!")
    print("="*70)
    print("\n🎉 Tudo pronto! Você pode iniciar o servidor:")
    print("   npm start")
    print("\n   Depois acesse: http://localhost:8080")
else:
    print("⚠️  INSTALAÇÃO INCOMPLETA")
    print("="*70)
    print("\n📝 Verifique os itens marcados com ❌ acima")
    print("   Consulte o GUIA_INSTALACAO_MODULAR.md para mais detalhes")

print("\n" + "="*70)
