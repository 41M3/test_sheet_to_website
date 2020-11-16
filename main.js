var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1Pa-B8MC_4PR6XKwiB3qn1S54eIPSctKKMcEGh2NQ5LY/edit?usp=sharing';

function init() {
    Tabletop.init({
        key: publicSpreadsheetUrl,
        callback: showInfo,
        simpleSheet: true
    })
}


function showInfo(data, tabletop) {
    data.forEach(function (data) {
        title.innerHTML = data.title;
        header.innerHTML = data.header;
        header2.innerHTML = data.header2;
        body.innerHTML = data.body;
        body2.innerHTML = data.body2;
        body3.innerHTML = data.body3;
        body4.innerHTML = data.body4;
        body5.innerHTML = data.body5;
        body6.innerHTML = data.body6;
        body7.innerHTML = data.body7;
        body8.innerHTML = data.body8;
        body9.innerHTML = data.body9;
        body10.innerHTML = data.body10;
        body11.innerHTML = data.body11;
        body12.innerHTML = data.body12;
        body13.innerHTML = data.body13;
        body14.innerHTML = data.body14;
        body15.innerHTML = data.body15;
        body16.innerHTML = data.body16;
        body17.innerHTML = data.body17;
        if (/*!data.body || !data.body2 ||
            !data.body3 || !data.body4 ||
            !data.body5 || !data.body6 ||
            !data.body7 || !data.body8 ||
            !data.body9 || !data.body10 ||
            !data.body11 || !data.body12 ||
            !data.body13 || !data.body14 ||
            !data.body15 || !data.body16 ||*/
            !data.body17 || !data.body18) {
            /*  document.getElementById("body").style.display = "none";
              document.getElementById("body2").style.display = "none";
              document.getElementById("body3").style.display = "none";
              document.getElementById("body4").style.display = "none";
              document.getElementById("body5").style.display = "none";
              document.getElementById("body6").style.display = "none";
              document.getElementById("body7").style.display = "none";
              document.getElementById("body8").style.display = "none";
              document.getElementById("body9").style.display = "none";
              document.getElementById("body10").style.display = "none";
              document.getElementById("body11").style.display = "none";
              document.getElementById("body12").style.display = "none";
              document.getElementById("body13").style.display = "none";
              document.getElementById("body14").style.display = "none";
              document.getElementById("body15").style.display = "none";
              document.getElementById("body16").style.display = "none";*/
            document.getElementById("body17").style.display = "none";
            document.getElementById("body18").style.display = "none";
            /*  document.getElementById("body19").style.display = "none";
              document.getElementById("body20").style.display = "none";*/
        } else {
            body17.innerHTML = data.body17;
            body18.innerHTML = data.body18;
        }
        if (!data.button1 || !data.button1link) {
            document.getElementById("button1link").style.display = "none";
            document.getElementById("button1").style.display = "none";
        } else {
            document.getElementById("button1link").href = data.button1link;
            document.getElementById("button1").innerHTML = data.button1;
        }

    });
}

window.addEventListener('DOMContentLoaded', init)















































