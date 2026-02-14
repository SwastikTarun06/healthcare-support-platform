/* This is the data that you see at the top of the webpage*/
const translations = {
    en: {
        search: "Search clinics...",
        openNow: "Open Now Only",
        showAll: "Show All",
        emergency: "🚨 Emergency? Call 999 or go to your nearest A&E immediately."
    },
    ar: {
        search: "ابحث عن العيادات...",
        openNow: "المفتوحة الآن فقط",
        showAll: "عرض الكل",
        emergency: "🚨 طارئ؟ اتصل بـ 999 أو اذهب إلى قسم الطوارئ الأقرب."
    },
    es: {
        search: "Buscar clínicas...",
        openNow: "Solo abiertas ahora",
        showAll: "Mostrar todo",
        emergency: "🚨 ¿Emergencia? Llama al 999 o ve a tu A&E más cercano."
    }
};

/* This is the Clinic data which includes:
   the hours
   the busy level
   whether it is free / low cost
   the services provided
   the rating / reviews / reviews counted
   the phone number (displayed in more info)
*/
const clinics = [
    { name: "Hope Clinic", open: true, details: "General healthcare • Walk-in accepted", hours: "Open until 17:00", busy: "Low", free: true, lowCost: false, services: ["General Care"], rating: 4.6, reviews: ["Very friendly.", "Quick service."], reviewsCount: 45, type: ["Health Centres"], extra: "Provides free basic checkups and medication vouchers.", coords: { lat: 51.5380, lng: -0.4840 }, phone: "07457231495" },
    { name: "Community Health Center", open: true, details: "Prescriptions • Vaccines", hours: "Open until 16:30", busy: "Moderate", free: false, lowCost: true, services: ["Prescriptions","Vaccines"], rating: 4.2, reviews: ["Cheap medication.", "Helpful staff."], reviewsCount: 122, type: ["Community Health clinics"], extra: "Low-cost prescriptions and free flu vaccines.", coords: { lat: 51.5405, lng: -0.4735 }, phone: "07915649772" },
    { name: "City Medical Hub", open: false, details: "Reopens at 9:00 AM", hours: "Opens 09:00", busy: "High", free: false, lowCost: false, services: ["Specialist","General Care"], rating: 4.0, reviews: ["Large facility."], reviewsCount: 78, type: ["Hospital clinics"], extra: "Large medical hub with specialist services.", coords: { lat: 51.5290, lng: -0.4800 }, phone: "07700168387" },
    { name: "WellCare Clinic", open: true, details: "Low-cost treatment • Mental health support", hours: "Open until 18:00", busy: "Low", free: false, lowCost: true, services: ["Mental Health","General Care"], rating: 4.7, reviews: ["Great counselling."], reviewsCount: 32, type: ["Mental Health Clinics"], extra: "Offers free counselling sessions every Friday.", coords: { lat: 51.5245, lng: -0.4700 }, phone: "07911834010" },
    { name: "Sunrise Dentistry", open: true, details: "Affordable dental services", hours: "Open until 17:30", busy: "Moderate", free: false, lowCost: false, services: ["Dentistry"], rating: 4.4, reviews: ["Excellent dentist."], reviewsCount: 58, type: ["Dentistry"], extra: "Provides low-cost dental care.", coords: { lat: 51.5360, lng: -0.4635 }, phone: "07707811162" },
    { name: "Bright Urology Center", open: false, details: "Specialized urology services", hours: "Opens 10:00", busy: "Low", free: false, lowCost: false, services: ["Specialist"], rating: 3.9, reviews: ["Requires appointment."], reviewsCount: 12, type: ["Urology"], extra: "Appointments required.", coords: { lat: 51.5415, lng: -0.4675 }, phone: "07795460029" },
    { name: "Urgent Care Uxbridge", open: true, details: "Immediate care for injuries", hours: "Open until 20:00", busy: "High", free: false, lowCost: false, services: ["General Care"], rating: 4.1, reviews: ["Good for urgent needs."], reviewsCount: 200, type: ["Urgent care"], extra: "Walk-in services for non-life-threatening conditions.", coords: { lat: 51.5280, lng: -0.4610 }, phone: "07700187520" },
    { name: "Phoenix Addiction Service", open: true, details: "Support for addiction recovery", hours: "Open until 16:00", busy: "Moderate", free: true, lowCost: false, services: ["Mental Health"], rating: 4.5, reviews: ["Supportive staff."], reviewsCount: 26, type: ["Addiction service"], extra: "Provides counselling and support groups.", coords: { lat: 51.5225, lng: -0.4785 }, phone: "07459984333" },
    { name: "Flex Physical Therapy", open: true, details: "Rehabilitation and exercise therapy", hours: "Open until 17:00", busy: "Low", free: false, lowCost: false, services: ["Physical therapy"], rating: 4.8, reviews: ["Great recovery program."], reviewsCount: 19, type: ["Physical therapy"], extra: "Focus on mobility recovery.", coords: { lat: 51.5395, lng: -0.4860 }, phone: "07911050258" },
    { name: "SkinCare Dermatology", open: false, details: "Dermatology specialists", hours: "Opens 09:30", busy: "Moderate", free: false, lowCost: false, services: ["Dermatology"], rating: 4.0, reviews: ["Expert staff."], reviewsCount: 40, type: ["Dermatology"], extra: "Treats skin disorders and cosmetic concerns.", coords: { lat: 51.5345, lng: -0.4595 }, phone: "07975271915" },
    { name: "Uxbridge General Hospital", open: true, details: "Emergency and inpatient care", hours: "Open 24/7", busy: "High", free: false, lowCost: false, services: ["General Care","Specialist"], rating: 4.3, reviews: ["Comprehensive services."], reviewsCount: 410, type: ["Hospitals"], extra: "Full-service hospital with ER.", coords: { lat: 51.5260, lng: -0.4850 }, phone: "07457267322" },
    { name: "Little Steps Birth Center", open: true, details: "Maternity care and birthing support", hours: "Open until 17:00", busy: "Moderate", free: false, lowCost: false, services: ["Birth centers","General Care"], rating: 4.9, reviews: ["Caring midwives."], reviewsCount: 88, type: ["Birth centers"], extra: "Natural birth and postnatal support.", coords: { lat: 51.5385, lng: -0.4710 }, phone: "07763277419" },
    { name: "Dialysis Care Uxbridge", open: false, details: "Kidney dialysis treatments", hours: "Opens 08:00", busy: "Low", free: false, lowCost: false, services: ["Specialist"], rating: 3.8, reviews: ["Specialized unit."], reviewsCount: 22, type: ["Dialysis centers"], extra: "Specialized dialysis services.", coords: { lat: 51.5235, lng: -0.4640 }, phone: "07474237275" },
    { name: "Elderly Support Nursing Home", open: true, details: "Long-term care for seniors", hours: "Open 24/7", busy: "Moderate", free: false, lowCost: false, services: ["Nursing homes"], rating: 4.0, reviews: ["Compassionate carers."], reviewsCount: 37, type: ["Nursing homes"], extra: "Residential care with medical supervision.", coords: { lat: 51.5410, lng: -0.4820 }, phone: "07330763611" },
    { name: "Vision Ophthalmology Clinic", open: true, details: "Eye care specialists", hours: "Open until 16:00", busy: "Low", free: false, lowCost: false, services: ["Ophthalmology"], rating: 4.2, reviews: ["Detailed eye exams."], reviewsCount: 61, type: ["Ophthalmology"], extra: "Eye exams and treatments.", coords: { lat: 51.5305, lng: -0.4590 }, phone: "07700115799" },
    { name: "Bone & Joint Orthopedics", open: false, details: "Orthopedic care and surgery", hours: "Opens 09:00", busy: "Moderate", free: false, lowCost: false, services: ["Orthopedics"], rating: 4.1, reviews: ["Skilled surgeons."], reviewsCount: 29, type: ["Orthopedics"], extra: "Treats fractures and joint issues.", coords: { lat: 51.5370, lng: -0.4770 }, phone: "07707272406" },
    { name: "Happy Feet Podiatry", open: true, details: "Foot and ankle care", hours: "Open until 15:30", busy: "Low", free: false, lowCost: true, services: ["Podiatry"], rating: 4.0, reviews: ["Good care."], reviewsCount: 17, type: ["Podiatry"], extra: "Specialized podiatric treatments.", coords: { lat: 51.5220, lng: -0.4680 }, phone: "02081230016" },
    { name: "Specialist Cardiology Center", open: true, details: "Heart disease diagnosis and treatment", hours: "Open until 16:30", busy: "Moderate", free: false, lowCost: false, services: ["Specialist"], rating: 4.6, reviews: ["Excellent cardiologists."], reviewsCount: 90, type: ["Specialist clinics"], extra: "Cardiology specialists available.", coords: { lat: 51.5400, lng: -0.4625 }, phone: "7911226540" },
    { name: "Rapid Ambulatory Care", open: true, details: "Outpatient services", hours: "Open until 19:00", busy: "Low", free: false, lowCost: false, services: ["Ambulatory care"], rating: 4.1, reviews: ["Quick and efficient."], reviewsCount: 54, type: ["Ambulatory care"], extra: "Quick consultations without overnight stay.", coords: { lat: 51.5275, lng: -0.4720 }, phone: "07911852804" },
    { name: "Hospice Care Uxbridge", open: true, details: "End-of-life support", hours: "Open 24/7", busy: "Low", free: false, lowCost: false, services: ["Hospices"], rating: 4.7, reviews: ["Comforting care."], reviewsCount: 14, type: ["Hospices"], extra: "Comfort and palliative care.", coords: { lat: 51.5335, lng: -0.4855 }, phone: "02081230019" },
    { name: "Mental Health Psychiatrists", open: true, details: "Psychiatric consultations", hours: "Open until 17:00", busy: "Moderate", free: false, lowCost: false, services: ["Psychiatrists","Mental Health"], rating: 4.3, reviews: ["Very supportive."], reviewsCount: 73, type: ["Psychiatrists"], extra: "Support for mental health disorders.", coords: { lat: 51.5240, lng: -0.4825 }, phone: "07700139052" },
    { name: "SafeCare Abortion Clinic", open: true, details: "Reproductive health services", hours: "Open until 15:00", busy: "Low", free: false, lowCost: false, services: ["Specialist"], rating: 4.4, reviews: ["Confidential care."], reviewsCount: 21, type: ["Abortion clinic"], extra: "Confidential care for women.", coords: { lat: 51.5390, lng: -0.4685 }, phone: "07457212677" },
    { name: "Blood Donation Center", open: true, details: "Blood bank and donation services", hours: "Open until 18:00", busy: "Moderate", free: true, lowCost: false, services: ["General Care"], rating: 4.8, reviews: ["Easy donation."], reviewsCount: 270, type: ["Blood banks"], extra: "Open for donations daily.", coords: { lat: 51.5295, lng: -0.4660 }, phone: "07782947890" },
    { name: "Diabetes Education Hub", open: false, details: "Education and care for diabetes", hours: "Opens 10:00", busy: "Low", free: false, lowCost: true, services: ["Diabetes education centers"], rating: 4.2, reviews: ["Helpful workshops."], reviewsCount: 33, type: ["Diabetes education centers"], extra: "Workshops and support for diabetics.", coords: { lat: 51.5420, lng: -0.4755 }, phone: "07392495390" },
    { name: "Healthy Diet Dieticians", open: true, details: "Nutrition and dietary counseling", hours: "Open until 16:00", busy: "Low", free: false, lowCost: true, services: ["Dieticians"], rating: 4.5, reviews: ["Great meal plans."], reviewsCount: 48, type: ["Dieticians"], extra: "Meal planning and nutritional advice.", coords: { lat: 51.5255, lng: -0.4615 }, phone: "07911873473" },
    { name: "MedEase Pharmacy", open: true, details: "Prescriptions • Over-the-counter medicine", hours: "Open until 18:00", busy: "Moderate", free: false, lowCost: true, services: ["Prescriptions"], rating: 4.4, reviews: ["Fast service.", "Helpful staff."], reviewsCount: 52, type: ["Pharmacies"], extra: "Offers discounted student prescriptions and health advice.", coords: { lat: 51.5422, lng: -0.4628 }, phone: "02081230045" },
    { name: "Vitality Rehabilitation Centre", open: true, details: "Recovery support • Injury rehabilitation", hours: "Open until 17:00", busy: "Low", free: false, lowCost: false, services: ["Rehabilitation", "Physical therapy"], rating: 4.7, reviews: ["Excellent recovery plans.", "Great physiotherapists."], reviewsCount: 34, type: ["Rehabilitation"], extra: "Provides structured recovery programmes for sports and injury patients.", coords: { lat: 51.5234, lng: -0.4869 }, phone: "07911854001" }
];

const categories = [
    "Addiction service", "Physical therapy", "Urgent care", "Dentistry",
    "Hospitals", "Birth centers", "Community Health clinics", "Nursing homes",
    "Ophthalmology", "Podiatry", "Specialist clinics", "Ambulatory care", "Health Centres",
    "Hospices", "Psychiatrists", "Abortion clinic", "Blood banks", "Dieticians",
    "Pharmacies", "Rehabilitation",
];

const tips = [
    "Drink clean water whenever possible.",
    "Visit walk-in clinics early in the day to avoid long queues.",
    "Ask clinics about free or low-cost medication programmes.",
    "Many pharmacies offer free blood pressure checks.",
    "Carry a list of your medications and allergies to appointments.",
    "Check opening hours online before travelling to a clinic."
];

/* These are the DOM Elements */
const clinicList = document.getElementById("clinicList");
const searchInput = document.getElementById("searchInput");
const filterBtn = document.getElementById("filterBtn");
const languageSelect = document.getElementById("languageSelect");
const emergencyBanner = document.getElementById("emergencyBanner");
const darkToggle = document.getElementById("darkToggle");
const tipsContainer = document.getElementById("tipsContainer");
const categoryBtn = document.getElementById("categoryBtn");
const categoryPopup = document.getElementById("categoryPopup");

const backToHomeBtn = document.getElementById("backToHomeBtn");

let filterOpenOnly = false;
let selectedCategories = [];
let currentLanguage = "en";

/* This is the code for the Map Setup using OpenStreetMap */
const map = L.map('cityMap').setView([51.5321, -0.4727], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

let mapMarkers = [];

/* This maps each service type to an emoji displayed on the clinic cards */
const serviceEmoji = {
    "Vaccines": "💉",
    "Prescriptions": "💊",
    "Mental Health": "❤️",
    "Dentistry": "🦷",
    "General Care": "🩺",
    "Physical therapy": "🏃",
    "Dermatology": "🧴",
    "Ophthalmology": "👁️",
    "Podiatry": "🦶",
    "Specialist": "🩺",
    "Birth centers": "🤱",
    "Blood banks": "🩸",
    "Dieticians": "🥗",
    "Pharmacies": "🏥"
};

/* This is the code to render functions which display the dynamic page content*/
function renderClinics() {
    clinicList.innerHTML = "";
    mapMarkers.forEach(m => map.removeLayer(m));
    mapMarkers = [];

    const filtered = clinics.filter(c => {
        if(filterOpenOnly && !c.open) return false;
        if(selectedCategories.length > 0 && !c.type.some(t => selectedCategories.includes(t))) return false;
        if(!c.name.toLowerCase().includes(searchInput.value.toLowerCase())) return false;
        return true;
    });

    if(filtered.length === 0) {
        clinicList.innerHTML = "<p>No clinics found.</p>";
    }

    filtered.forEach((clinic, i) => {
        const card = document.createElement("div");
        card.className = "clinic-card fade-in";
        card.style.animationDelay = `${i * 120}ms`;
        card.id = clinic.name.replace(/\s+/g, "");

        const badges = [];
        if (clinic.free) badges.push(`<span class="badge free">FREE</span>`);
        if (clinic.lowCost) badges.push(`<span class="badge lowcost">LOW-COST</span>`);

        // The Busy indicicator colours
        let busyColor = "#34d399";
        if (clinic.busy === "Moderate") busyColor = "#f1c40f";
        if (clinic.busy === "High") busyColor = "#ef4444";

        // The services which are displayed using emojis
        const servicesHtml = (clinic.services || [])
            .map(s => `<span title="${s}">${serviceEmoji[s] || "🔹"}</span>`)
            .join(" ");

        // This gives a summary of the ratings and reviews
        const reviewsCount = clinic.reviewsCount || (clinic.reviews?.length ?? 0);
        const ratingHtml = clinic.rating ?
            `<span class="rating">⭐ ${clinic.rating.toFixed(1)} (${reviewsCount} reviews)</span>` :
            "";

        card.innerHTML = `
            <div class="card-header">
                <div>
                    <h3>${clinic.name} ${clinic.open ? "🟢" : "🔴"}</h3>
                    <p>${clinic.details}</p>
                </div>
                <button class="toggle-info">More Info</button>
            </div>

            <div class="clinic-meta">
                <div>🕒 ${clinic.hours}</div>
                <div class="busy-indicator">
                    <span class="busy-dot" style="background:${busyColor}"></span> Busy: ${clinic.busy}
                </div>
                ${badges.join(" ")}
                ${ratingHtml}
            </div>

            <div class="services">${servicesHtml}</div>

            <div class="more-info">
                ${clinic.extra}
                <br><br>
                📞 <strong>Phone:</strong> ${clinic.phone}
                ${clinic.reviews && clinic.reviews.length ?
                    `<div style="margin-top:10px;"><strong>Recent reviews:</strong><ul>
                    ${clinic.reviews.slice(0,3).map(r => `<li>${r}</li>`).join("")}
                    </ul></div>` : ""}
            </div>
        `;

        // This is to toggle the more info section
        card.querySelector(".toggle-info").addEventListener("click", () => {
            card.querySelector(".more-info").classList.toggle("expanded");
        });

        clinicList.appendChild(card);

        // These are for the map markers
        const marker = L.marker([clinic.coords.lat, clinic.coords.lng])
            .addTo(map)
            .bindPopup(`<b>${clinic.name}</b><br>${clinic.open ? "Open" : "Closed"}`);
        mapMarkers.push(marker);
    });
}

function renderTips() {
    tipsContainer.innerHTML = "";
    tips.forEach(t => {
        const card = document.createElement("div");
        card.className = "tip-card";
        card.textContent = t;
        tipsContainer.appendChild(card);
    });
}

function renderCategoryPopup() {
    categoryPopup.innerHTML = "";
    categories.forEach(cat => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="checkbox" value="${cat}" ${selectedCategories.includes(cat) ? "checked" : ""}/> ${cat}`;
        label.querySelector("input").addEventListener("change", (e) => {
            if(e.target.checked) selectedCategories.push(cat);
            else selectedCategories = selectedCategories.filter(c => c !== cat);
            renderClinics();
        });
        categoryPopup.appendChild(label);
    });
}

/* This is Language Support */
function updateLanguage() {
    searchInput.placeholder = translations[currentLanguage].search;
    filterBtn.textContent = filterOpenOnly ? translations[currentLanguage].showAll : translations[currentLanguage].openNow;
    emergencyBanner.textContent = translations[currentLanguage].emergency;
}

/* These are the Event Listeners */
darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
    darkToggle.textContent = document.body.classList.contains("dark-mode")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
});

filterBtn.addEventListener("click", () => {
    filterOpenOnly = !filterOpenOnly;
    filterBtn.textContent = filterOpenOnly ? translations[currentLanguage].showAll : translations[currentLanguage].openNow;
    renderClinics();
});

searchInput.addEventListener("input", renderClinics);

languageSelect.addEventListener("change", () => {
    currentLanguage = languageSelect.value;
    updateLanguage();
});

categoryBtn.addEventListener("click", () => {
    categoryPopup.style.display = categoryPopup.style.display === "block" ? "none" : "block";
    renderCategoryPopup();
});

// This is the Back to Home Page button listener
if (backToHomeBtn) {
    backToHomeBtn.addEventListener('click', () => {
        // Path from healthcare/ to Haven Home Page/
        window.location.href = '../index.html';
    });
}

/* This is the Initial Render */
renderClinics();
renderTips();
updateLanguage();
