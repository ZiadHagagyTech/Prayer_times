document.addEventListener("DOMContentLoaded", function() {
    updatePrayerTimes();
});

// مصفوفة لتخزين مواقيت الصلاة
const prayerTimes = {
    "1": [
        { date: "1 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
        
      // أضف المزيد من التواريخ لشهر يناير هنا
      
      { date: "2 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      
      { date: "3 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      
      { date: "4 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "5 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "6 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "7 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "8 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "9 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "10 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "11 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "12 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "13 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "14 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "15 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "16 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "17 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "18 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "19 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "20 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "21 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "22 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "23 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "24 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "25 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "26 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "27 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "28 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "29 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "30 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      { date: "31 يناير", fajr: "05:00 ص", dhuhr: "12:00 م", asr: "03:00 م", maghrib: "06:00 م", isha: "07:30 م" },
      
    ],
    "2": [
        { date: "1 فبراير", fajr: "05:05 ص", dhuhr: "12:15 م", asr: "03:10 م", maghrib: "06:05 م", isha: "07:35 م" },
        // أضف المزيد من التواريخ لشهر فبراير هنا
    ],
    "3": [
        { date: "1 مارس", fajr: "05:10 ص", dhuhr: "12:30 م", asr: "03:20 م", maghrib: "06:10 م", isha: "07:40 م" },
        // أضف المزيد من التواريخ لشهر مارس هنا
    ],
    // أضف بيانات مماثلة لباقي الشهور
    "4": [{ date: "1 أبريل", fajr: "05:10 ص", dhuhr: "12:30 م", asr: "03:20 م", maghrib: "06:10 م", isha: "07:40 م" },
          
    { date: "2 أبريل", fajr: "05:10 ص", dhuhr: "12:30 م", asr: "03:20 م", maghrib: "06:10 م", isha: "07:40 م" }, 
          
         ],
  
  
    "5": [{ date: "1 مايو", fajr: "05:10 ص", dhuhr: "12:30 م", asr: "03:20 م", maghrib: "06:10 م", isha: "07:40 م" }],
  
  
    "6": [{ date: "1 يونيو", fajr: "05:10 ص", dhuhr: "12:30 م", asr: "03:20 م", maghrib: "06:10 م", isha: "07:40 م" }],
  
  
    "7": [{ date: "1 يوليو", fajr: "05:10 ص", dhuhr: "12:30 م", asr: "03:20 م", maghrib: "06:10 م", isha: "07:40 م" }],
  
  
    "8": [{ date: "1 أغسطس", fajr: "05:10 ص", dhuhr: "12:30 م", asr: "03:20 م", maghrib: "06:10 م", isha: "07:40 م" }],
  
  
    "9": [{ date: "1 سبتمبر", fajr: "05:10 ص", dhuhr: "12:30 م", asr: "03:20 م", maghrib: "06:10 م", isha: "07:40 م" }],
  
  
    "10": [{ date: "1 أكتوبر", fajr: "05:10 ص", dhuhr: "12:30 م", asr: "03:20 م", maghrib: "06:10 م", isha: "07:40 م" }],
  
  
    "11": [{ date: "1 نوفمبر", fajr: "05:10 ص", dhuhr: "12:30 م", asr: "03:20 م", maghrib: "06:10 م", isha: "07:40 م" }],
  
  
    "12": [{ date: "1 ديسمبر", fajr: "05:10 ص", dhuhr: "12:30 م", asr: "03:20 م", maghrib: "06:10 م", isha: "07:40 م" }]
};

// دالة لإنشاء الجدول باستخدام مواقيت الصلاة الموجودة في prayerTimes
function createPrayerTimesTable(month) {
    const times = prayerTimes[month] || [];
    const prayerTimesDiv = document.getElementById("prayer-times");
    prayerTimesDiv.innerHTML = "";

    if (times.length > 0) {
        const table = document.createElement("table");
        const headerRow = document.createElement("tr");
        const headers = ["التاريخ", "الفجر", "الظهر", "العصر", "المغرب", "العشاء"];

        headers.forEach(headerText => {
            const th = document.createElement("th");
            th.textContent = headerText;
            headerRow.appendChild(th);
        });

        table.appendChild(headerRow);

        times.forEach(time => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${time.date}</td>
                <td>${time.fajr}</td>
                <td>${time.dhuhr}</td>
                <td>${time.asr}</td>
                <td>${time.maghrib}</td>
                <td>${time.isha}</td>
            `;
            table.appendChild(row);
        });

        prayerTimesDiv.appendChild(table);
    } else {
        prayerTimesDiv.innerHTML = "<p>لا توجد بيانات لمواعيد الصلاة لهذا الشهر.</p>";
    }
}

// دالة لتحميل مواقيت الصلاة كملف PDF
function downloadPDF() {
    const prayerTimesTable = document.getElementById("prayer-times").outerHTML;
    
    const pdfContent = `
        <html>
        <head>
            <title>مواقيت الصلاة</title>
            <style>
                table {
                    border-collapse: collapse;
                    width: 100%;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: right;
                }
                th {
                    background-color: #f2f2f2;
                }
            </style>
        </head>
        <body>
            ${prayerTimesTable}
        </body>
        </html>
    `;
    
    const blob = new Blob([pdfContent], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "prayer_times.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// تحديث مواقيت الصلاة عند تغيير الشهر
function updatePrayerTimes() {
    const month = document.getElementById("month").value;
    createPrayerTimesTable(month);
}
