# VDS, deploy, domen, SSL, git

### Kerakli unsurlar

1. nodejs
2. psql
3. sublime
4. sublimemerge
5. git
6. pm2

### NodeJs ni o'rnatish

1. NodeJs ning yangiroq versiyasini o'rnatish uchun PPA (personal package archive) dan foydalanamiz:

    ```bash
    cd ~
    curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh
    ```

2. Arxivni yuklab olindi endi setup shell scriptni ishga tushiramiz:

    ```bash
    sudo bash nodesource_setup.sh
    ```

3. Bu jarayonda PPA bizning sozlamalarimizga avtomatik qo'shildi, endi NodeJs ni o'rnatamiz:

    ```bash
    sudo apt install nodejs
    ```

4. NodeJs o'rnatilganligini va versiyasini tekshiramiz:

```bash
node -v
```

Xulosa: bu holatda Node Source si `nodejs` hamda `npm` ga ham ega. Ya'ni bira to'la **npm (node package manager)** ham o'rnagan.

```bash
npm -v
```

### Simple Server yaratamiz (express, jsonwebtoken)

1. `express` yordamida oddiy REST API qilamiz. API mizdan ma'lumotlarni login qilgan Userlargina ma'lumot oladigan qilamiz. Bunda xavfsizlikni tekshirish uchun `jsonwebtoken` dan foydalanamiz

    ```bash

    ```