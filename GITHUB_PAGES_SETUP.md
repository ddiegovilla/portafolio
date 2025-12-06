# 🚀 Configuración para GitHub Pages

Tu proyecto está configurado para desplegarse automáticamente en GitHub Pages.

## 📋 Pasos para Activar GitHub Pages

### Paso 1: Habilitar GitHub Pages en tu repositorio

1. Ve a tu repositorio en GitHub: `https://github.com/diegovilla207/portafolio`
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, busca **Pages**
4. En **Source**, selecciona **GitHub Actions**
5. Guarda los cambios

### Paso 2: Hacer push de los cambios

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### Paso 3: Esperar el despliegue

1. Ve a la pestaña **Actions** en tu repositorio
2. Verás un workflow ejecutándose llamado "Deploy to GitHub Pages"
3. Espera 2-3 minutos a que termine
4. Una vez completado, tu sitio estará disponible en:
   **`https://diegovilla207.github.io/portafolio`**

## 🔄 Actualizaciones Futuras

Cada vez que hagas push a la rama `main`, el sitio se actualizará automáticamente:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

## ⚙️ Configuración Actual

- **Base Path**: `/portafolio` (necesario para GitHub Pages)
- **Export**: Estático (optimizado para GitHub Pages)
- **Imágenes**: Sin optimización (requerido para export estático)
- **Workflow**: Automático en cada push a `main`

## 📝 Notas Importantes

- La URL será: `https://diegovilla207.github.io/portafolio`
- Si quieres usar un dominio personalizado, puedes configurarlo en Settings > Pages
- El despliegue es automático, no necesitas hacer nada más después de la primera configuración

## 🎉 ¡Listo!

Una vez configurado, tu portfolio estará disponible públicamente en GitHub Pages.

