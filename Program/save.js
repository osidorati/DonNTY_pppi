/* Сохранение файла в нужное пространство */


/**
 * Функция сохранения файла в нужное пространство
 *
 * @return url
 */
function saveSVG() {
    /**
     * Главная панель
     *
     * @var string svgData
     */
    var svgData = drawPanel.innerHTML.toString();

    /**
     * Имя файла
     *
     * @var string fileName
     */
    var fileName = prompt('Введите, пожалуйста, имя файла без расширения:');

    if (fileName == null)
        return;

    /**
     * Элемент файла
     *
     * @var string a
     */
        var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";

    var blob = new Blob([svgData], {type: "octet/stream"}),
        url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName + ".svg";
    a.click();
    window.URL.revokeObjectURL(url);
}