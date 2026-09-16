/* Public website release copy; provider consent version remains unchanged. */
(() => {
  "use strict";
  const copy = {
  "en": {
    "offerLabel": "Launch offer",
    "offerTitle": "Free to download before October 30, 2026",
    "download": "Download on the App Store",
    "offerTerms": "Free download applies to the app. Optional AI requires your own provider API key; provider usage may incur separate charges. Check the price shown in your App Store before downloading.",
    "dataDetails": "Apple Health & AI data details",
    "consentTitle": "Consent and request controls",
    "aiAccuracy": "AI can make mistakes. Review generated plans, interpretations and recognized values before using or saving them. AI does not provide medical diagnosis, treatment or emergency advice.",
    "costTitle": "AI access and costs"
  },
  "zh-Hant": {
    "offerLabel": "首發限時優惠",
    "offerTitle": "2026 年 10 月 30 日前免費下載",
    "download": "前往 App Store 下載",
    "offerTerms": "免費下載適用於 App 本身。選用 AI 須使用自己的服務商 API Key，服務商可能另收用量費用；下載前請確認所在地 App Store 顯示的價格。",
    "dataDetails": "Apple 健康與 AI 資料說明",
    "consentTitle": "同意授權與每次資料選擇",
    "aiAccuracy": "AI 可能出錯。使用或儲存前，請核對產生的課表、解讀及辨識數值；AI 不提供醫療診斷、治療或緊急建議。",
    "costTitle": "AI 使用方式與費用"
  },
  "zh-Hans": {
    "offerLabel": "首发限时优惠",
    "offerTitle": "2026 年 10 月 30 日前免费下载",
    "download": "前往 App Store 下载",
    "offerTerms": "免费下载适用于 App 本身。可选 AI 需使用自己的服务商 API Key，服务商可能另收用量费用；下载前请确认所在地 App Store 显示的价格。",
    "dataDetails": "Apple 健康与 AI 数据说明",
    "consentTitle": "同意授权与每次数据选择",
    "aiAccuracy": "AI 可能出错。使用或保存前，请核对生成的课表、解读及识别数值；AI 不提供医疗诊断、治疗或紧急建议。",
    "costTitle": "AI 使用方式与费用"
  },
  "ja": {
    "offerLabel": "リリース記念キャンペーン",
    "offerTitle": "2026年10月30日より前は無料ダウンロード",
    "download": "App Store でダウンロード",
    "offerTerms": "無料ダウンロードはアプリ本体が対象です。任意の AI 機能にはご自身の API キーが必要で、提供元の利用料金が別途かかる場合があります。ダウンロード前に地域の App Store の価格をご確認ください。",
    "dataDetails": "Apple ヘルスケアと AI のデータ説明",
    "consentTitle": "同意とリクエストごとのデータ選択",
    "aiAccuracy": "AI は誤る場合があります。プラン、解説、認識された数値は使用・保存前に確認してください。AI は医療診断、治療、緊急時の助言を提供しません。",
    "costTitle": "AI の利用方法と費用"
  },
  "ko": {
    "offerLabel": "출시 기념 혜택",
    "offerTitle": "2026년 10월 30일 전까지 무료 다운로드",
    "download": "App Store에서 다운로드",
    "offerTerms": "무료 다운로드는 앱 자체에 적용됩니다. 선택적 AI 기능은 본인의 API 키가 필요하며 제공업체 사용료가 별도로 발생할 수 있습니다. 다운로드 전에 해당 지역 App Store 가격을 확인하세요.",
    "dataDetails": "Apple 건강 및 AI 데이터 안내",
    "consentTitle": "동의 및 요청별 데이터 선택",
    "aiAccuracy": "AI는 실수할 수 있습니다. 생성된 계획, 해석, 인식된 수치는 사용하거나 저장하기 전에 확인하세요. AI는 의료 진단, 치료 또는 응급 조언을 제공하지 않습니다.",
    "costTitle": "AI 이용 및 비용"
  },
  "de": {
    "offerLabel": "Einführungsangebot",
    "offerTitle": "Vor dem 30. Oktober 2026 kostenlos laden",
    "download": "Im App Store laden",
    "offerTerms": "Der kostenlose Download gilt für die App. Optionale KI erfordert Ihren eigenen API-Schlüssel; beim Anbieter können zusätzliche Nutzungskosten entstehen. Prüfen Sie vor dem Download den Preis in Ihrem App Store.",
    "dataDetails": "Apple Health und KI: Daten im Detail",
    "consentTitle": "Einwilligung und Datenauswahl je Anfrage",
    "aiAccuracy": "KI kann Fehler machen. Prüfen Sie Pläne, Interpretationen und erkannte Werte vor der Nutzung oder dem Speichern. KI bietet keine medizinische Diagnose, Behandlung oder Notfallberatung.",
    "costTitle": "KI-Zugang und Kosten"
  },
  "fr": {
    "offerLabel": "Offre de lancement",
    "offerTitle": "Téléchargement gratuit avant le 30 octobre 2026",
    "download": "Télécharger sur l’App Store",
    "offerTerms": "Le téléchargement gratuit concerne l’app. L’IA facultative nécessite votre propre clé API ; le fournisseur peut facturer l’utilisation séparément. Vérifiez le prix dans votre App Store avant de télécharger.",
    "dataDetails": "Apple Santé et IA : données partagées",
    "consentTitle": "Consentement et données de chaque demande",
    "aiAccuracy": "L’IA peut se tromper. Vérifiez les programmes, interprétations et valeurs reconnues avant utilisation ou enregistrement. L’IA ne fournit ni diagnostic, ni traitement, ni conseil médical d’urgence.",
    "costTitle": "Accès à l’IA et frais"
  },
  "es": {
    "offerLabel": "Oferta de lanzamiento",
    "offerTitle": "Descarga gratis antes del 30 de octubre de 2026",
    "download": "Descargar en el App Store",
    "offerTerms": "La descarga gratuita se aplica a la app. La IA opcional requiere tu propia clave API; el proveedor puede cobrar el uso por separado. Comprueba el precio en tu App Store antes de descargar.",
    "dataDetails": "Apple Salud e IA: detalles de los datos",
    "consentTitle": "Consentimiento y datos de cada solicitud",
    "aiAccuracy": "La IA puede equivocarse. Revisa los planes, interpretaciones y valores reconocidos antes de usarlos o guardarlos. La IA no ofrece diagnóstico, tratamiento ni asesoramiento médico de urgencia.",
    "costTitle": "Acceso a IA y costes"
  },
  "ms": {
    "offerLabel": "Tawaran pelancaran",
    "offerTitle": "Muat turun percuma sebelum 30 Oktober 2026",
    "download": "Muat turun di App Store",
    "offerTerms": "Muat turun percuma terpakai pada aplikasi. AI pilihan memerlukan kunci API anda sendiri; penyedia mungkin mengenakan caj penggunaan berasingan. Semak harga di App Store anda sebelum memuat turun.",
    "dataDetails": "Butiran data Apple Health dan AI",
    "consentTitle": "Persetujuan dan pilihan data setiap permintaan",
    "aiAccuracy": "AI boleh membuat kesilapan. Semak pelan, tafsiran dan nilai yang dikenal pasti sebelum digunakan atau disimpan. AI tidak memberikan diagnosis, rawatan atau nasihat kecemasan perubatan.",
    "costTitle": "Akses AI dan kos"
  },
  "ru": {
    "offerLabel": "Предложение к запуску",
    "offerTitle": "Бесплатное скачивание до 30 октября 2026 года",
    "download": "Скачать в App Store",
    "offerTerms": "Бесплатное скачивание относится к приложению. Для необязательного ИИ нужен ваш API-ключ; поставщик может отдельно взимать плату за использование. Перед скачиванием проверьте цену в вашем App Store.",
    "dataDetails": "Apple Здоровье и ИИ: сведения о данных",
    "consentTitle": "Согласие и выбор данных для запроса",
    "aiAccuracy": "ИИ может ошибаться. Проверяйте планы, объяснения и распознанные значения перед использованием или сохранением. ИИ не предоставляет медицинскую диагностику, лечение или экстренные рекомендации.",
    "costTitle": "Доступ к ИИ и стоимость"
  },
  "th": {
    "offerLabel": "ข้อเสนอช่วงเปิดตัว",
    "offerTitle": "ดาวน์โหลดฟรีก่อนวันที่ 30 ตุลาคม 2026",
    "download": "ดาวน์โหลดบน App Store",
    "offerTerms": "การดาวน์โหลดฟรีใช้กับตัวแอป AI เป็นทางเลือกและต้องใช้คีย์ API ของคุณเอง ผู้ให้บริการอาจคิดค่าบริการใช้งานแยกต่างหาก โปรดตรวจสอบราคาใน App Store ของคุณก่อนดาวน์โหลด",
    "dataDetails": "รายละเอียดข้อมูล Apple Health และ AI",
    "consentTitle": "ความยินยอมและการเลือกข้อมูลแต่ละคำขอ",
    "aiAccuracy": "AI อาจผิดพลาดได้ โปรดตรวจสอบแผน คำอธิบาย และค่าที่อ่านได้ก่อนใช้หรือบันทึก AI ไม่ให้การวินิจฉัย การรักษา หรือคำแนะนำฉุกเฉินทางการแพทย์",
    "costTitle": "การใช้ AI และค่าใช้จ่าย"
  }
};
  function render() {
    const lang = document.documentElement.lang;
    const text = copy[lang] || copy.en;
    document.querySelectorAll('[data-release]').forEach(el => {
      el.textContent = text[el.dataset.release] || '';
    });
    document.querySelectorAll('[data-i18n="trustConsentTitle"]').forEach(el => {
      el.textContent = text.consentTitle;
    });
    document.querySelectorAll('[data-disclosure-link]').forEach(el => {
      el.href = 'privacy.html?lang=' + encodeURIComponent(lang) + '#health-ai-disclosure';
    });
  }
  new MutationObserver(render).observe(document.documentElement, {
    attributes: true, attributeFilter: ['lang', 'data-language']
  });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
