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

    **Github Repo:** [https://github.com/akbarjondev/f3-test](https://github.com/akbarjondev/f3-test) 

### Loyihamizni serverimizga o'rnatamiz — Github repodan clone qilish

1. Buning uchun `/home` directoryda loyiha uchun folder ochamiz (projects)
2. `/home/projects` — ga kirib quyidagicha teramiz

    ```bash
    git clone https://github.com/akbarjondev/f3-test f3dars
    ```

3. Lyiha ichiga kiramiz va terminalda `npm install` ni teramiz. Bu bizga barcha packagelarni o'rnatib beradi

### PM2: loyihani doimiy kuzatib ishga tushirib turish uchun

1. Terminalda `npm i -g pm2` — ni teramiz. PM2 global o'rnatiladi.
2. Loyihamiz rootida turib `pm2 start index.js` buyrug'ini teramiz.
3. Serverimiz holatini tekshirish uchun `pm2 monit` — buyrug'ini teramiz.

**PM2 buyruqlari:**

```bash
pm2 status // holatni ko'rsatadi
pm2 restart appname || app_id // loyihani qayta ishga tushiradi
pm2 stop app // loyihani chopadi
```

### Setup Firewall

```bash
sudo ufw enable
sudo ufw status
sudo ufw allow ssh (Port 22)
sudo ufw allow http (Port 80)
sudo ufw allow https (Port 443)
```

### Install NGINX and configure

```bash
sudo apt install nginx

sudo nano /etc/nginx/sites-available/default
```

Server blokining Location qismiga quyidagilarni qo'shamiz:

```markdown
server_name domennomi.com www.domennomi.com;

location / {
        proxy_pass http://localhost:4000; #whatever port your app runs on
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
}
```

NGINX holatini tekshiramiz va qayta ishga tushiramiz

```markdown
# Check NGINX config
sudo nginx -t

# Restart NGINX
sudo service nginx restart
```