"""
Script para limpar páginas desnecessárias do template Eleventy Excellent
EXECUÇÃO REAL - Cria backup e deleta arquivos
"""

import os
import shutil
from datetime import datetime

# Instruções para o usuário
instructions = """
================================================================================
🧹 SCRIPT DE LIMPEZA - ELIS ELEVENTY
================================================================================

Este script deve ser executado NO WINDOWS, não aqui no Claude.

📋 INSTRUÇÕES PARA EXECUTAR NO WINDOWS:

1. Salve este script como: cleanup_pages.py
   Local: C:\\Users\\carlo\\elis-eleventy\\cleanup_pages.py

2. Abra PowerShell na pasta do projeto:
   cd C:\\Users\\carlo\\elis-eleventy

3. Execute o script:
   python cleanup_pages.py

4. O script vai:
   ✅ Criar backup automático
   ✅ Deletar 7 arquivos desnecessários
   ✅ Manter apenas index.njk, privacy.md, legal.md

================================================================================
"""

print(instructions)

# Configuração
PAGES_DIR = "src/pages"
BACKUP_DIR = f"backup_pages_{datetime.now().strftime('%Y%m%d_%H%M%S')}"

# Arquivos a DELETAR
DELETE_FILES = [
    'about.md',
    'accessibility.md',
    'blog.njk',
    'built-with.njk',
    'get-started.md',
    'styleguide.njk',
    'sustainability.md',
]

def main():
    print("\n🔍 Verificando estrutura...")
    
    # Verificar se estamos no diretório correto
    if not os.path.exists(PAGES_DIR):
        print(f"❌ ERRO: Pasta {PAGES_DIR} não encontrada!")
        print("   Execute este script na pasta raiz do projeto elis-eleventy")
        return
    
    print(f"✅ Pasta encontrada: {PAGES_DIR}")
    
    # Criar backup
    print(f"\n📦 Criando backup em: {BACKUP_DIR}")
    os.makedirs(BACKUP_DIR, exist_ok=True)
    
    # Copiar todos os arquivos para backup
    for file in os.listdir(PAGES_DIR):
        if file.endswith(('.njk', '.md')):
            src = os.path.join(PAGES_DIR, file)
            dst = os.path.join(BACKUP_DIR, file)
            shutil.copy2(src, dst)
            print(f"   ✓ Backup: {file}")
    
    print(f"✅ Backup completo!")
    
    # Deletar arquivos desnecessários
    print(f"\n🗑️  Deletando arquivos desnecessários...")
    deleted_count = 0
    
    for file in DELETE_FILES:
        file_path = os.path.join(PAGES_DIR, file)
        if os.path.exists(file_path):
            os.remove(file_path)
            print(f"   ✓ Deletado: {file}")
            deleted_count += 1
        else:
            print(f"   ⚠️  Não encontrado: {file}")
    
    # Listar arquivos restantes
    print(f"\n📋 Arquivos mantidos em {PAGES_DIR}:")
    remaining_files = [f for f in os.listdir(PAGES_DIR) if f.endswith(('.njk', '.md'))]
    for file in sorted(remaining_files):
        print(f"   ✓ {file}")
    
    print("\n" + "="*80)
    print("✅ LIMPEZA CONCLUÍDA COM SUCESSO!")
    print("="*80)
    print(f"\n📊 Resumo:")
    print(f"   • Backup criado: {BACKUP_DIR}")
    print(f"   • Arquivos deletados: {deleted_count}")
    print(f"   • Arquivos mantidos: {len(remaining_files)}")
    print(f"\n🎯 Próximo passo:")
    print(f"   Implementar seções About e Deliverables na index.njk")
    print("="*80)

if __name__ == "__main__":
    main()
