
# Projeto 1

## Linux de Referência
```
Distributor ID: Ubuntu
Description:    Ubuntu 24.04.1 LTS
Release:        24.04
Codename:       noble
```


## Instalar Python

```bash
sudo apt install python3.12-venv
```

# Atenção!
    * raíz do projeto é o diretório **PROJETO_DA_TRILHA_DE_ENGENHARIA_DE_DADOS**

## Criar/Carregar Ambiente Virtual

* No diretório raíz do projeto

```bash
python3 -m venv venv
source venv/bin/activate
```

# Verificar Pip
```bash
which pip
```
* deve retornar um caminho relativo ao venv


# Instalar dependências do projeto

* aqui aeroporto_etl é subdiretório do diretório raíz do projeto.

```bash
cd aeroporto_etl
pip install -r requirements.txt
```

* a instalação das dependências demora alguns segundos

# Adicionar Variáveis de Ambiente

* No arquivo **aeroporto_etl/.env** adicionar chaves
    * APP_ID=
    * APP_KEY=


# Verificar acesso de .env

* Comando no mesmo diretório de **.venv**

```bash
dotenv list
```

# Rodar com dotenv

* Comando no mesmo diretório de **.venv**

```bash
dotenv run -- python aeroporto_etl/main.py
```


# Instalar Extensões VSCode (Opcional)

    * Python (da Microsoft)
    * Pylance (da Microsoft)
    * Python Debugger (da Microsoft)
    * Rainbow CSV (de mechatroner)

