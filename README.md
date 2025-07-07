## Тестовое задание для компании Design&code на должность react-native разработчик

## Описание работы приложения

Лента новостей подгружается из локальной БД с бесконечной пагинацией, поиском событий, кешированием через redux-persist и обработкой ошибок (Network off, error requests)

### Android
Необходимо добавить файл local.proporties в корень папки android с подобным содержимым
``` sdk.dir = /Users/{name}/Library/Android/sdk ```
Затем запускать с открытым эмулятором android studio
```sh
yarn android
```
Если возникнут ошибки можно попробовать очистить кеш и стартануть заново
```sh
cd android && ./gradlew clean
```
### iOS

Для начала подгрузить подсы

```sh
cd ios && pod install
```
И запустить сборку
```sh
yarn ios
```
## Запись работы
В папке /app/assets есть файл record-screen.mp4 с записью работы приложения
