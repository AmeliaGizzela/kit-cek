const commons = (fileName, width = 420) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=${width}`;
const localAsset = (fileName) => `assets/${fileName}`;

const components = [
  {
    id: "led-yellow",
    name: "LED Kuning",
    fullName: "LED Kuning 5mm",
    qty: 5,
    clue: "Aku menyala kuning. Aku bisa menjadi tanda pada robot.",
    image: commons("LED, 5mm, yellow (unlabelled, full).svg", 320),
    source: "https://commons.wikimedia.org/wiki/File:LED,_5mm,_yellow_(unlabelled,_full).svg",
  },
  {
    id: "led-green",
    name: "LED Hijau",
    fullName: "LED Hijau 5mm",
    qty: 5,
    clue: "Aku menyala hijau. Aku bisa menjadi tanda pada robot.",
    image: commons("LED, 5mm, green (unlabelled, full).svg", 320),
    source: "https://commons.wikimedia.org/wiki/File:LED,_5mm,_green_(unlabelled,_full).svg",
  },
  {
    id: "led-red",
    name: "LED Merah",
    fullName: "LED Merah 5mm",
    qty: 5,
    clue: "Aku menyala merah. Aku bisa menjadi tanda pada robot.",
    image: commons("LED, 5mm, red (unlabelled, full).svg", 320),
    source: "https://commons.wikimedia.org/wiki/File:LED,_5mm,_red_(unlabelled,_full).svg",
  },
  {
    id: "led-rgb",
    name: "RGB",
    fullName: "LED RGB common cathode",
    qty: 3,
    clue: "Aku bisa menyala merah, hijau, dan biru. Warna itu bisa dicampur.",
    image: commons("RGB LED 5mm.jpg", 420),
    source: "https://commons.wikimedia.org/wiki/File:RGB_LED_5mm.jpg",
  },
  {
    id: "relay",
    name: "Relay",
    fullName: "Modul relay 1 channel 5V high level trigger Arduino",
    qty: 1,
    clue: "Aku adalah sakelar. Aku bisa menyalakan atau mematikan alat.",
    image: commons("SRD-05VDC-SL-C 5V one-channel relay module.jpg", 420),
    source: "https://commons.wikimedia.org/wiki/File:SRD-05VDC-SL-C_5V_one-channel_relay_module.jpg",
  },
  {
    id: "resistor-220",
    name: "Resistor 220",
    fullName: "Resistor 220 ohm - 1/4 watt",
    qty: 10,
    clue: "Aku membatasi arus listrik. Aku membantu menjaga lampu LED. Nilai hambatanku 220 ohm.",
    image: commons("220 ohms 5% axial resistor.jpg", 420),
    source: "https://commons.wikimedia.org/wiki/File:220_ohms_5%25_axial_resistor.jpg",
  },
  {
    id: "resistor-1k",
    name: "Resistor 1K",
    fullName: "Resistor 1K ohm - 1/4 watt",
    qty: 10,
    clue: "Aku membatasi arus listrik. Nilai hambatanku 1.000 ohm.",
    image: localAsset("resistor-1k.png"),
    source: "assets/resistor-1k.png",
  },
  {
    id: "resistor-10k",
    name: "Resistor 10K",
    fullName: "Resistor 10K ohm - 1/4 watt",
    qty: 10,
    clue: "Aku membatasi arus listrik. Nilai hambatanku 10.000 ohm.",
    image: commons("Resistor 1480417 8 9 HDR Enhancer 1.jpg", 420),
    source: "https://commons.wikimedia.org/wiki/File:Resistor_1480417_8_9_HDR_Enhancer_1.jpg",
  },
  {
    id: "object-avoidance",
    name: "Obeng Kecil",
    fullName: "Obeng kecil (-) 125mm",
    qty: 1,
    clue: "Aku membantu memutar sekrup. Ujungku pipih.",
    image: localAsset("obeng.png"),
    source: "assets/obeng.png",
  },
  {
    id: "photoresistor",
    name: "Photoresistor",
    fullName: "Photoresistor 5mm",
    qty: 2,
    clue: "Aku bisa mengetahui terang dan gelap. Aku bisa membantu lampu menyala saat gelap.",
    image: commons("GL5528 photoresistors 01.jpg", 420),
    source: "https://commons.wikimedia.org/wiki/File:GL5528_photoresistors_01.jpg",
  },
  {
    id: "battery-connector",
    name: "Konektor Baterai DC 9 Volt",
    fullName: "Konektor Baterai 9V to Jack DC",
    qty: 1,
    clue: "Aku menghubungkan baterai ke papan robot.",
    image: commons("9 volt Battery Snap.jpg", 420),
    source: "https://commons.wikimedia.org/wiki/File:9_volt_Battery_Snap.jpg",
  },
  {
    id: "potentiometer",
    name: "Potensio",
    fullName: "Potensiometer Mono 50K Ohm",
    qty: 1,
    clue: "Aku bisa diputar. Aku bisa membantu mengatur terang lampu.",
    image: commons("Potentiometer.jpg", 420),
    source: "https://commons.wikimedia.org/wiki/File:Potentiometer.jpg",
  },
  {
    id: "tact-switch",
    name: "Button",
    fullName: "Tact Switch / Micro Switch DIP 4 Kaki 6x6x5MM",
    qty: 2,
    clue: "Tekan aku untuk memberi perintah kepada robot.",
    image: localAsset("button.png"),
    source: "assets/button.png",
  },
  {
    id: "buzzer",
    name: "Buzzer",
    fullName: "Buzzer Aktif 5V",
    qty: 1,
    clue: "Aku membuat bunyi. Aku bisa menjadi alarm robot.",
    image: localAsset("buzzer.png"),
    source: "assets/buzzer.png",
  },
  {
    id: "arduino",
    name: "Arduino Uno",
    fullName: "Arduino UNO R3 DIP Clone Version",
    qty: 1,
    clue: "Aku menjalankan program. Aku memberi perintah kepada bagian robot.",
    image: commons("Arduino Uno - R3.jpg", 420),
    source: "https://commons.wikimedia.org/wiki/File:Arduino_Uno_-_R3.jpg",
  },
  {
    id: "lcd-i2c",
    name: "Layar LCD",
    fullName: "I2C 16x02 / 16x2 Serial LCD Module Display Green",
    qty: 1,
    clue: "Aku menampilkan tulisan dan angka. Aku punya dua baris.",
    image: commons("Mizar32 I2C LCD module 16x2.jpg", 420),
    source: "https://commons.wikimedia.org/wiki/File:Mizar32_I2C_LCD_module_16x2.jpg",
  },
  {
    id: "breadboard",
    name: "Breadboard",
    fullName: "Breadboard 400 Point",
    qty: 1,
    clue: "Aku menjadi tempat memasang kabel dan bagian robot.",
    image: commons("400 points breadboard.jpg", 420),
    source: "https://commons.wikimedia.org/wiki/File:400_points_breadboard.jpg",
  },
  {
    id: "ultrasonic",
    name: "Ultrasonik",
    fullName: "HC-SR04 Sensor Ultrasonic",
    qty: 1,
    clue: "Aku mengukur jarak ke benda. Aku punya dua bagian bulat seperti mata.",
    image: commons("HC SR04 Ultrasonic Module.jpg", 420),
    source: "https://commons.wikimedia.org/wiki/File:HC_SR04_Ultrasonic_Module.jpg",
  },
  {
    id: "servo",
    name: "Motor Servo",
    fullName: "Tower Pro SG90 9G / 1.6KG Micro Servo",
    qty: 1,
    clue: "Aku bergerak ke arah yang diatur. Aku bisa menggerakkan lengan robot.",
    image: commons("Tower Pro SG90 micro servo motor.jpg", 420),
    source: "https://commons.wikimedia.org/wiki/File:Tower_Pro_SG90_micro_servo_motor.jpg",
  },
  {
    id: "dht11",
    name: "DHT 11",
    fullName: "DHT11 Humidity & Temperature Sensor",
    qty: 1,
    clue: "Aku mengukur suhu dan kelembapan udara.",
    image: localAsset("dht11.png"),
    source: "assets/dht11.png",
  },
  {
    id: "jumper-mm",
    name: "Kabel male-male",
    fullName: "Kabel Jumper Male to Male - 20cm",
    qty: 1,
    unit: "bundle",
    clue: "Aku menghubungkan bagian robot. Kedua ujungku punya pin seperti jarum kecil.",
    image: commons("A few Jumper Wires.jpg", 420),
    source: "https://commons.wikimedia.org/wiki/File:A_few_Jumper_Wires.jpg",
  },
  {
    id: "jumper-mf",
    name: "Kabel male female",
    fullName: "Kabel Jumper Male to Female - 20cm",
    qty: 1,
    unit: "bundle",
    clue: "Aku menghubungkan bagian robot. Satu ujungku punya pin, satu lagi punya lubang.",
    image: commons("FF Jumper Wires.jpg", 420),
    source: "https://commons.wikimedia.org/wiki/File:FF_Jumper_Wires.jpg",
  },
  {
    id: "usb-cable",
    name: "Kabel USB",
    fullName: "Kabel USB Arduino",
    qty: 1,
    clue: "Aku menghubungkan komputer ke Arduino. Program dikirim lewat kabel ini.",
    image: localAsset("kabel-usb.png"),
    source: "assets/kabel-usb.png",
  },
];

const $ = (id) => document.getElementById(id);
const state = { name: '', index: 0, answers: [], matched: false, selected: false, signedAt: null };
const screens = ['welcome', 'mission', 'review', 'result'];
function unitOf(component) {
  return component.unit || 'buah';
}
function formatQuantity(value, component) {
  return `${value} ${unitOf(component)}`;
}
function answerFor(component) {
  return state.answers.find((item) => item.id === component.id);
}
function upsertAnswer(component, actual) {
  const answer = { id: component.id, name: component.name, qty: component.qty, unit: unitOf(component), actual };
  const index = state.answers.findIndex((item) => item.id === component.id);
  if (index === -1) state.answers.push(answer);
  else state.answers[index] = answer;
}
function nextUnansweredIndex() {
  const afterCurrent = components.findIndex((component, index) => index > state.index && !answerFor(component));
  if (afterCurrent !== -1) return afterCurrent;
  return components.findIndex((component) => !answerFor(component));
}
function quantityDifference(component, actual) {
  const diff = Math.abs(component.qty - actual);
  return `${actual < component.qty ? 'kurang' : 'lebih'} ${formatQuantity(diff, component)}`;
}
function renderKitList() {
  const totals = components.reduce((acc, component) => {
    const unit = unitOf(component);
    acc[unit] = (acc[unit] || 0) + component.qty;
    return acc;
  }, {});
  $('kitTotals').textContent = `· ${components.length} jenis · ${Object.entries(totals).map(([unit, total]) => `${total} ${unit}`).join(' · ')}`;
  $('kitRows').replaceChildren();
  components.forEach((component, index) => {
    const answer = answerFor(component);
    const status = !answer ? 'Belum diperiksa' : answer.actual === component.qty
      ? 'Sudah diperiksa · sesuai'
      : `Sudah diperiksa · ditemukan ${formatQuantity(answer.actual, component)}`;
    const row = document.createElement('tr');
    if (answer) row.className = answer.actual === component.qty ? 'inventory-ok' : 'inventory-difference';
    [index + 1, component.name, formatQuantity(component.qty, component), status].forEach((value) => {
      const cell = document.createElement('td');
      cell.textContent = value;
      row.append(cell);
    });
    $('kitRows').append(row);
  });
}
function showScreen(id) {
  screens.forEach((screen) => { $(screen).hidden = screen !== id; });
}
function updateProgress() {
  renderKitList();
  $('ownerText').textContent = `Penanggung jawab: ${state.name}`;
  $('scoreText').textContent = `${state.answers.length} / ${components.length} komponen diperiksa`;
  $('scoreBar').style.width = `${state.answers.length / components.length * 100}%`;
}
function markStep(step) {
  [...$('steps').children].forEach((item, index) => {
    item.classList.toggle('current', index === step);
    item.classList.toggle('done', index < step);
    if (index === step) item.setAttribute('aria-current', 'step');
    else item.removeAttribute('aria-current');
  });
}
function shuffled(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
function loadMission() {
  const component = components[state.index];
  const savedAnswer = answerFor(component);
  state.matched = Boolean(savedAnswer);
  state.selected = Boolean(savedAnswer);
  showScreen('mission');
  updateProgress();
  markStep(savedAnswer ? 3 : 0);
  $('missionNumber').textContent = `Misi ${state.index + 1} dari ${components.length}`;
  $('previousMissionButton').disabled = state.index === 0;
  $('nextMissionButton').disabled = state.index === components.length - 1;
  $('missionTitle').textContent = component.clue;
  $('clue').textContent = '';
  $('revealButton').hidden = Boolean(savedAnswer);
  $('matching').hidden = !savedAnswer;
  $('inventory').hidden = !savedAnswer;
  $('matchFeedback').textContent = '';
  $('quantityFeedback').textContent = '';
  $('actualQuantity').value = savedAnswer ? String(savedAnswer.actual) : '';
  $('quantityConfirmed').checked = Boolean(savedAnswer);
  $('quantityConfirmed').disabled = !savedAnswer;
  $('nextButton').disabled = !savedAnswer;
  $('nextButton').textContent = state.answers.length === components.length && state.index === components.length - 1 ? 'Lihat hasil pemeriksaan →' : 'Simpan & lanjut →';
  $('nameToken').textContent = component.name;
  $('nameToken').classList.toggle('selected', Boolean(savedAnswer));
  $('nameToken').disabled = Boolean(savedAnswer);
  $('nameToken').draggable = !savedAnswer;
  $('choices').replaceChildren();
  const alternatives = shuffled(components.filter((item) => item.id !== component.id)).slice(0, 2);
  shuffled([component, ...alternatives]).forEach((option, index) => {
    const card = document.createElement('article');
    card.className = 'component-card';
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'image-button';
    button.setAttribute('aria-label', `Cocokkan dengan gambar ${index + 1}`);
    const image = document.createElement('img');
    image.src = option.image;
    image.alt = `Foto pilihan ${index + 1}; seret nama komponen ke sini`;
    image.addEventListener('error', () => {
      const warning = document.createElement('p');
      warning.textContent = 'Foto belum termuat. Buka sumber gambar untuk melihat referensinya.';
      button.replaceChildren(warning);
    });
    button.append(image);
    const zone = document.createElement('p');
    zone.className = 'drop-zone';
    zone.textContent = 'Taruh nama di gambar ini';
    const source = document.createElement('a');
    source.className = 'source-link';
    source.href = option.source;
    source.target = '_blank';
    source.rel = 'noopener noreferrer';
      source.textContent = 'Lihat foto ↗';
    card.append(button, zone, source);
      if (savedAnswer && option.id === component.id) {
        card.classList.add('correct');
        zone.textContent = component.name;
      }
    const attempt = () => {
      if (!state.selected || state.matched) return;
      if (option.id !== component.id) {
        $('matchFeedback').textContent = 'Belum cocok. Amati bentuk komponennya dan coba lagi.';
        card.classList.add('wrong');
        return;
      }
      state.matched = true;
      markStep(3);
      card.classList.remove('wrong');
      card.classList.add('correct');
      zone.textContent = component.name;
      $('matchFeedback').textContent = 'Cocok! Sekarang cari komponen ini di kitmu dan hitung jumlahnya.';
      $('nameToken').disabled = true;
      $('nameToken').draggable = false;
      $('inventory').hidden = false;
      $('expectedQuantity').textContent = `Jumlah sesuai daftar: ${formatQuantity(component.qty, component)}.`;
      $('actualQuantity').focus();
    };
    button.addEventListener('click', () => {
      if (!state.selected) $('matchFeedback').textContent = 'Ketuk nama komponen terlebih dahulu, lalu pilih gambarnya.';
      attempt();
    });
    card.addEventListener('dragover', (event) => { if (!state.matched) { event.preventDefault(); card.classList.add('over'); } });
    card.addEventListener('dragleave', () => card.classList.remove('over'));
    card.addEventListener('drop', (event) => {
      event.preventDefault();
      card.classList.remove('over');
      if (event.dataTransfer.getData('text/plain') !== component.id) return;
      state.selected = true;
      attempt();
    });
    $('choices').append(card);
  });
  if (savedAnswer) {
    $('matchFeedback').textContent = 'Jawaban ini sudah tersimpan. Kamu bisa mengubah jumlahnya lalu simpan lagi.';
    $('expectedQuantity').textContent = `Jumlah sesuai daftar: ${formatQuantity(component.qty, component)}.`;
    updateQuantity();
    $('quantityConfirmed').checked = true;
    $('nextButton').disabled = false;
  }
  $('missionTitle').focus();
}
function readQuantity() {
  const raw = $('actualQuantity').value.trim();
  const number = Number(raw);
  return raw !== '' && Number.isInteger(number) && number >= 0 && number <= 999 ? number : null;
}
function updateQuantity() {
  const count = readQuantity();
  const component = components[state.index];
  $('quantityConfirmed').checked = false;
  $('quantityConfirmed').disabled = count === null;
  $('nextButton').disabled = true;
  $('quantityConfirmationText').textContent = count === component.qty
    ? 'Saya sudah menghitung dan jumlahnya sesuai daftar.'
    : 'Saya sudah menghitung dan mencatat jumlah sebenarnya, termasuk jika berbeda dari daftar.';
  $('quantityFeedback').textContent = count === null
    ? 'Masukkan jumlah berupa bilangan bulat 0–999. Isi 0 jika komponen tidak ada.'
    : count === component.qty ? 'Jumlah sesuai. Centang untuk mengonfirmasi.'
    : `Jumlah berbeda: ${quantityDifference(component, count)}. Tetap catat hasil sebenarnya.`;
}
function isComplete() { return state.answers.length === components.length && state.answers.every((item) => item.actual === item.qty); }
function showReview() {
  showScreen('review');
  updateProgress();
  $('reviewSummary').textContent = isComplete()
    ? 'Semua komponen sudah dikenali dan jumlahnya sesuai daftar. Konfirmasikan pernyataanmu di bawah.'
    : 'Semua komponen sudah dikenali. Ada jumlah yang berbeda dari daftar; sampaikan hasil ini kepada guru.';
  $('reviewRows').replaceChildren();
  components.map(answerFor).filter(Boolean).forEach((answer) => {
    const component = components.find((item) => item.id === answer.id);
    const row = document.createElement('tr');
    const status = answer.actual === answer.qty ? 'Sesuai' : answer.actual < answer.qty ? `Kurang ${formatQuantity(answer.qty - answer.actual, component)}` : `Lebih ${formatQuantity(answer.actual - answer.qty, component)}`;
    [answer.name, formatQuantity(answer.qty, component), formatQuantity(answer.actual, component), status].forEach((value) => {
      const cell = document.createElement('td');
      cell.textContent = value;
      row.append(cell);
    });
    $('reviewRows').append(row);
  });
  $('declarationText').textContent = isComplete()
    ? `Saya, ${state.name}, menyatakan bahwa starter kit saya lengkap sesuai daftar. Saya sudah memeriksa jumlah setiap komponen dan bertanggung jawab atas kit ini.`
    : `Saya, ${state.name}, menyatakan telah memeriksa isi starter kit dan mencatat perbedaan jumlah sesuai hasil di atas. Saya bertanggung jawab atas kit ini dan akan melaporkan perbedaannya kepada guru.`;
  $('declaration').checked = false;
  $('finishButton').disabled = true;
  $('reviewTitle').focus();
}
function restart() {
  state.name = '';
  state.index = 0;
  state.answers = [];
  state.signedAt = null;
  $('studentForm').reset();
  $('nameError').textContent = '';
  $('identity').hidden = true;
  renderKitList();
  showScreen('welcome');
  $('studentName').focus();
}
$('studentForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = $('studentName').value.trim().replace(/\s+/g, ' ');
  if (!name) { $('nameError').textContent = 'Isi namamu agar penanggung jawab kit tercatat.'; $('studentName').focus(); return; }
  state.name = name;
  $('nameError').textContent = '';
  $('identity').hidden = false;
  loadMission();
});
$('revealButton').addEventListener('click', () => {
  $('revealButton').hidden = true;
  $('matching').hidden = false;
  $('missionTitle').textContent = 'Namaku…';
  markStep(1);
  $('nameToken').focus();
});
$('nameToken').addEventListener('click', () => {
  if (state.matched) return;
  state.selected = true;
  $('nameToken').classList.add('selected');
  markStep(2);
  $('matchFeedback').textContent = 'Nama dipilih. Ketuk gambar yang cocok atau seret nama ke gambar.';
});
$('nameToken').addEventListener('dragstart', (event) => {
  if (state.matched) { event.preventDefault(); return; }
  state.selected = true;
  markStep(2);
  event.dataTransfer.setData('text/plain', components[state.index].id);
  event.dataTransfer.effectAllowed = 'move';
});
$('actualQuantity').addEventListener('input', updateQuantity);
$('quantityConfirmed').addEventListener('change', () => {
  $('nextButton').disabled = !state.matched || readQuantity() === null || !$('quantityConfirmed').checked;
});
$('nextButton').addEventListener('click', () => {
  const actual = readQuantity();
  if (!state.matched || actual === null || !$('quantityConfirmed').checked) return;
  const component = components[state.index];
  upsertAnswer(component, actual);
  if (state.answers.length === components.length) {
    showReview();
    return;
  }
  state.index = nextUnansweredIndex();
  loadMission();
});
$('previousMissionButton').addEventListener('click', () => {
  if (state.index === 0) return;
  state.index -= 1;
  loadMission();
});
$('nextMissionButton').addEventListener('click', () => {
  if (state.index === components.length - 1) return;
  state.index += 1;
  loadMission();
});
$('declaration').addEventListener('change', () => { $('finishButton').disabled = !$('declaration').checked; });
$('finishButton').addEventListener('click', () => {
  if (!$('declaration').checked || state.answers.length !== components.length) return;
  state.signedAt = new Date();
  showScreen('result');
  $('resultTitle').textContent = isComplete() ? 'Starter kit saya lengkap!' : 'Kit sudah diperiksa, ada jumlah yang berbeda.';
  $('resultStatement').textContent = $('declarationText').textContent;
  $('resultDate').textContent = `Penanggung jawab: ${state.name} · ${state.signedAt.toLocaleString('id-ID')}`;
  $('resultTitle').focus();
});
$('downloadButton').addEventListener('click', () => {
  if (!state.signedAt) return;
  const lines = ['HASIL PEMERIKSAAN STARTER KIT ROBOTIK', `Penanggung jawab: ${state.name}`, `Tanggal: ${state.signedAt.toLocaleString('id-ID')}`, '', ...components.map(answerFor).filter(Boolean).map((answer) => {
    const component = components.find((item) => item.id === answer.id);
    return `${answer.name}: target ${formatQuantity(answer.qty, component)}, ditemukan ${formatQuantity(answer.actual, component)} — ${answer.actual === answer.qty ? 'sesuai' : 'berbeda'}`;
  }), '', $('resultStatement').textContent];
  const url = URL.createObjectURL(new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = `pemeriksaan-starter-kit-${state.name.replace(/[^a-z0-9]+/gi, '-').slice(0, 60)}.txt`;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
$('restartButton').addEventListener('click', () => { if (window.confirm('Mulai ulang? Nama dan hasil pemeriksaan saat ini akan dihapus.')) restart(); });
$('newStudentButton').addEventListener('click', restart);
renderKitList();

