# Шпаргалка по роботі з Git

Створити новий репозиторій:
git init project-name

Якщо ви плануєте клонувати його по ssh з віддаленої машини, також скажіть:
git config --bool core.bare true

… інакше при git push ви будете отримувати дивні помилки на кшталт:

Refusing to update checked out branch: refs / heads / master 
By default, updating the current branch in a non-bare repository 
is denied, because it will make the index and work tree inconsistent 
with what you pushed, and will require 'git reset - -hard 'to match 
the work tree to HEAD.

Клонувати репозиторій з віддаленої машини:
git clone git @ bitbucket.org:afiskon / hs-textgen.git

Якщо хочемо пушіть один код в кілька репозиторіїв:
git remote add remotename git @ gitlab.example.ru:repo.git

Додати файл в репозиторій:
git add text.txt

Видалити файл:
git rm text.txt

Поточний стан сховища (зміни, невирішені конфлікти і тп):
git status

Зробити Комміт:
git commit -a -m "Commit description"

Зробити Комміт, ввівши його опис за допомогою $ EDITOR:
git commit -a

Замержіть все гілки локального сховища на віддалений репозиторій (аналогічно замість origin можна вказати і remotename, см вище):
git push origin

Аналогічно до попереднього, але робиться пуш тільки гілки master:
git push origin master

Запущено поточну гілку , не вводячи цілком її назва:
git push origin HEAD

Замержіть все гілки з віддаленого сховища:
git pull origin

Аналогічно до попереднього, але накочується тільки гілка master:
git pull origin master

Хильнути поточну гілку, не вводячи її довге ім’я:
git pull origin HEAD

Завантажити все гілки з origin, але не Мержа їх в локальний репозиторій:
git fetch origin

Аналогічно до попереднього, але тільки для однієї заданої гілки:
git fetch origin master

Почати працювати з гілкою some_branch (вже існуючої):
git checkout -b some_branch origin / some_branch

Створити новий бранч (відгалузилося від поточного):
git branch some_branch

Переключитися на іншу гілку (з тих, з якими вже працюємо):
git checkout some_branch

Отримуємо список гілок, з якими працюємо:
git branch # зірочкою відзначена поточна гілка

Переглянути всі існуючі гілки:
git branch -a # | grep something

Замержіть some_branch в поточну гілку:
git merge some_branch

Видалити бранч (після Мержа):
git branch -d some_branch

Просто видалити бранч (тупикова гілка):
git branch -D some_branch

Історія змін:
git log

Історія змін в зворотному порядку:
git log --reverse

Історія конкретного файлу:
git log file.txt

Аналогічно до попереднього, але з переглядом зроблених змін:
git log -p file.txt

Історія з іменами файлів і псевдографічним зображенням бранчів:
git log --stat --graph

Зміни, зроблені в заданому Ком:
git show d8578edf8458ce06fbc5bb76a58c5ca4a58c5ca4

Подивитися, ким востаннє правилася кожен рядок файлу:
git blame file.txt

Видалити бранч зі сховищ на сервері:
git push origin: branch-name

Відкотитися до конкретного коммітов (хеш дивимося в «git log»):
git reset --hard d8578edf8458ce06fbc5bb76a58c5ca4a58c5ca4

Аналогічно до попереднього, але файли на диску залишаються без змін:
git reset --soft d8578edf8458ce06fbc5bb76a58c5ca4a58c5ca4

Спробувати звернути заданий commit (але частіше використовується branch / reset + merge):
git revert d8578edf8458ce06fbc5bb76a58c5ca4a58c5ca4

Перегляд змін (сумарних, а не всіх по черзі, як в «git log»):
git diff # подробиці див в "git diff --help"

Використовуємо vimdiff як програми для вирішення конфліктів (mergetool) за замовчуванням:
git config --global merge.tool vimdiff

Відключаємо діалог «який mergetool ви хотіли б використовувати»:
git config --global mergetool.prompt false

Відображаємо таби як 4 пробілу, наприклад, в «git diff»:
git config --global core.pager 'less -x4'

Створення глобального файлу .gitignore :
git config --global core.excludesfile ~ / .gitignore_global

Вирішення конфліктів (коли оні виникають в результаті Мержа):
git mergetool

Створення тега:
git tag some_tag # за тегом можна вказати хеш коммітов

Видалення untracked files:
git clean -f

«Упаковка» сховища для збільшення швидкості роботи з ним:
git gc

Іноді потрібно створити копію сховища або перенести його з однієї машини на іншу. Це робиться приблизно так:

mkdir -p / tmp / git-copy
cd / tmp / git-copy 
git clone --bare git @ example.com:afiskon / cpp-opengl-tutorial1.git 
cd cpp-opengl-tutorial1.git 
git push --mirror git @ example.com:afiskon / cpp-opengl-tutorial2.git
Слід зазначити, що Git дозволяє використовувати коротку запис хеш. Замість «d8578edf8458ce06fbc5bb76a58c5ca4a58c5ca4» можна писати «d8578edf» або навіть «d857».