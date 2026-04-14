# 🩺 Dr. Yamamoto Ishikawa — Sitio Web + Chatbot

Sitio web profesional para cirujano especialista con chatbot integrado capaz de agendar citas en **Google Calendar** vía **n8n**.

---

## 🗂 Estructura del proyecto

```
dr-yamamoto/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx          # Navegación responsive con scroll-aware
│   │   ├── Hero.tsx            # Hero animado con canvas de partículas
│   │   ├── Especialidades.tsx  # Grid de 6 especialidades quirúrgicas
│   │   ├── Trayectoria.tsx     # Biografía + timeline de carrera
│   │   ├── Testimonios.tsx     # Testimonios de pacientes
│   │   ├── Contacto.tsx        # Formulario de cita + horarios + info
│   │   ├── Footer.tsx          # Pie de página
│   │   └── Chatbot.tsx         # Widget de chat flotante → n8n webhook
│   ├── api/
│   │   └── chat/route.ts       # Proxy API route → n8n
│   ├── globals.css             # Variables CSS, fuentes, animaciones
│   ├── layout.tsx              # Root layout + metadata SEO
│   └── page.tsx                # Página principal
├── n8n-workflow.json           # ← IMPORTAR EN N8N
├── tailwind.config.ts
├── next.config.js
├── .env.local.example
└── README.md
```

---

## 🚀 Instalación del sitio web (Next.js)

### Requisitos
- Node.js 18+
- npm o yarn

### Pasos

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.local.example .env.local
# Edita .env.local y coloca la URL de tu webhook de n8n

# 3. Ejecutar en desarrollo
npm run dev

# 4. Build para producción
npm run build
npm start
```

El sitio estará disponible en **http://localhost:3000**

---

## ⚙️ Configuración del flujo n8n

### 1. Importar el workflow

1. Abre tu instancia de n8n
2. Ve a **Workflows → Import from file**
3. Selecciona el archivo `n8n-workflow.json`
4. El workflow se importará con todos los nodos configurados

### 2. Configurar credenciales de Google Calendar

1. En n8n ve a **Credentials → New**
2. Busca **"Google Calendar OAuth2"**
3. Sigue el flujo OAuth2:
   - Crea un proyecto en [Google Cloud Console](https://console.cloud.google.com)
   - Habilita la **Google Calendar API**
   - Crea credenciales **OAuth 2.0** (tipo: Web Application)
   - URL de callback: `https://TU-N8N.com/rest/oauth2-credential/callback`
4. Asigna la credencial al nodo **"Crear evento en Google Calendar"**

### 3. Activar el webhook

1. En el workflow, haz clic en el nodo **"Webhook – Recibir mensaje"**
2. Copia la **Production URL** del webhook
   - Formato: `https://TU-N8N.com/webhook/dr-yamamoto-chat`
3. Activa el workflow con el toggle **Active**

### 4. Conectar el chatbot con el webhook

En tu archivo `.env.local`:

```env
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://TU-N8N.com/webhook/dr-yamamoto-chat
N8N_WEBHOOK_URL=https://TU-N8N.com/webhook/dr-yamamoto-chat
```

---

## 🤖 Lógica del chatbot

El flujo de n8n detecta automáticamente la **intención** del usuario:

| Intención | Ejemplo de mensaje | Acción |
|-----------|-------------------|--------|
| `booking` | "Quiero agendar una cita" | Solicita datos → Crea evento en Google Calendar |
| `schedule` | "¿Cuáles son los horarios?" | Responde con horarios (Lun–Sáb 10am–7pm) |
| `specialties` | "¿Qué especialidades tienen?" | Lista las 6 especialidades |
| `location` | "¿Dónde están ubicados?" | Da dirección completa |
| `pricing` | "¿Cuánto cuesta la consulta?" | Invita a llamar directamente |
| `greeting` | "Hola" / "Buenos días" | Saludo de bienvenida con menú |
| `general` | Cualquier otro mensaje | Respuesta con opciones disponibles |

### Flujo de agendamiento de citas

```
Usuario: "Quiero agendar una cita"
    → Bot: Solicita nombre, fecha y teléfono

Usuario: "Me llamo Ana López, quiero el jueves a las 11am, tel 33 9876 5432"
    → Bot: Parsea la información
    → n8n: Crea evento en Google Calendar (lun–sáb, 10am–7pm)
    → Bot: Confirma la cita con fecha/hora/dirección
```

### Validaciones automáticas
- ✅ Solo citas de **lunes a sábado**
- ✅ Horario: **10:00 am – 7:00 pm**
- ✅ Duración de cita: **1 hora**
- ✅ Recordatorio automático: 24h antes por email + 1h antes popup
- ❌ Rechaza domingos con mensaje amigable

---

## 🎨 Diseño y estética

- **Paleta**: Obsidiana (`#0D0D0F`) + Dorado (`#C9A84C`) + Marfil (`#F5F0E8`)
- **Tipografía**: Cormorant Garamond (display) + DM Sans (cuerpo) + DM Mono (etiquetas)
- **Animaciones**: Canvas de partículas en Hero, fade-up escalonados, hover effects
- **Responsive**: Mobile-first, completamente adaptable

---

## 🔧 Personalización

### Cambiar información del médico

Editar en cada componente:
- **Nombre / cédula**: `Footer.tsx`
- **Teléfono / email / dirección**: `Contacto.tsx`
- **Horarios**: `Contacto.tsx` (array `horarios`)
- **Especialidades**: `Especialidades.tsx` (array `especialidades`)
- **Testimonios**: `Testimonios.tsx` (array `testimonios`)
- **Timeline**: `Trayectoria.tsx` (array `timeline`)

### Cambiar el calendario destino

En `n8n-workflow.json`, nodo `"Crear evento en Google Calendar"`:
```json
"calendarId": "tu-email@gmail.com"
```

---

## 📦 Deploy recomendado

| Servicio | Comando |
|---------|---------|
| **Vercel** (recomendado) | `vercel --prod` |
| **Netlify** | `netlify deploy --prod` |
| **Docker** | `docker build -t dr-yamamoto . && docker run -p 3000:3000 dr-yamamoto` |

Para n8n en producción se recomienda **n8n Cloud** o un VPS con Docker.

---

## 📞 Soporte

Para dudas técnicas sobre la implementación, contactar al desarrollador del proyecto.
