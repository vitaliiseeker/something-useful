# Git (пам’ятка)

Git — розподілена система керування версіями.

## Базові команди 

Створення репозиторія на локальному комп’ютері:
$git init

Подивитись поточний стан
$git status

Додати (підготувати) в репозиторій усі файли
$git add .

Додати окремий файл
$git add index.html

Остаточно передати в репозиторій підготовлені файли із коментарем до того що додається:
$git commit –m "Коментар"

Переглянути різницю між тим, що в репозиторію і файлами на диску:
$git diff

Забрати з git лишнє
$git rm –- cached LICENSE.PHP

Відкат
$git checkout --license.php

# Робота з гілками

Створення нової гілки
$git branch new_style

Переключитися на нову гілку
$git checkout new_style

Подивитись гілки і яка поточна
$git branch

Злиття гілок
$git merge new_style

## Робота з віддаленим сервером (GitHub) 

Визначення віддаленого сервера
$git remote add origin https://github.com/user/site.git

Запис на сервер з іменем origin основної гілки (master)
$git push –u origin master

Змінити сервер origin
$git remote set-url origin https://some_address

Клонування вмісту репозиторію на локальний комп’ютер
$git clone https://github.com/user/site.git

Подивитися віддалені репозиторії
$git remote 

Більш детальна інформація про репозиторії
git remote -v

Подивитися гілки на віддаленому репозиторії
$git branch –r

Можна також стягнути з сервера нові зміни та злити:
$git fetch
$git merge origin/master

Два вищенаведені рядки можна замінити так(не рекомендується):
$git pull

## Конфігурування

Встановлення імені користувача
$git config --global user.name  "volodymyr"

Прописування пошти
$git config --global user.email my@gmail.com

Вивести список параметрів
$git config --list

У Windows параметри зберігаються в основній папці поточного користувачача під іменем .gitconfig

Файли, що повинні ігноруватися репозиторієм потрібно записати у файлі .gitignore у папку, що контролюється репозиторієм. 
Вивести файли, що ігноруються:
$git status --untracked-files
Логи змін

##  Подивитися лог

$git log
вивід логів доволі гнучки і може мати багато параметрів, подивитись довідку по log
$git help log

Подивитись commit за останні два тижні:
$git log --since=2.weeks

Подивитися останні 2 commit
$git log -p -2

## Додаткові інструменти для зручної роботи  

Для особливо ледачих Git має засоби для графічної роботи. Інтегровані середовища розробки програмного забезпечення можуть напряму працювати із Git.

Для тих хто працює в командному рядку корисно буде встановити kdiff3 – засіб для злиття версій файлів, також замінити редактор по замовчуванню на notepad++ чи інший більш зручний. Відповідні налаштування можна зробити з командного рядка, або ж напряму у файлі .gitconfig набрати:

[core]
 editor = 'C:\\Program Files\\Notepad++\\notepad++.exe' -multiInst -notabbar -nosession -noPlugin
[merge]
 tool = kdiff3
[mergetool "kdiff3"]
 cmd = 'D:\\Program Files\\KDiff3\\kdiff3.exe' $BASE $LOCAL $REMOTE -o $MERGED
