# 🔧 Solución al Error 404 en GitHub Pages

## ✅ Verificaciones Importantes

### 1. URL Correcta
Asegúrate de acceder a la URL correcta:
- ✅ **Correcto**: `https://ddiegovilla.github.io/portafolio/`
- ❌ **Incorrecto**: `https://ddiegovilla.github.io/` (sin `/portafolio`)

### 2. Verificar que el Workflow se Ejecutó
1. Ve a tu repositorio: `https://github.com/ddiegovilla/portafolio`
2. Haz clic en la pestaña **Actions**
3. Verifica que el workflow "Deploy to GitHub Pages" se haya ejecutado y completado exitosamente
4. Si hay errores, haz clic en el workflow fallido para ver los detalles

### 3. Verificar Configuración de GitHub Pages
1. Ve a **Settings** > **Pages** en tu repositorio
2. Asegúrate de que:
   - **Source**: Está configurado como **GitHub Actions** (no "Deploy from a branch")
   - El workflow aparece en la lista

## 🚀 Pasos para Solucionar

### Paso 1: Hacer Commit y Push de los Cambios

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### Paso 2: Esperar a que el Workflow Complete
- Ve a la pestaña **Actions** en GitHub
- Espera 2-3 minutos a que el workflow termine
- Debe mostrar un check verde ✅ cuando termine

### Paso 3: Acceder a la URL Correcta
Una vez que el workflow termine, accede a:
```
https://ddiegovilla.github.io/portafolio/
```

**IMPORTANTE**: No olvides la barra diagonal final `/` y el `/portafolio` en la URL.

## 🔍 Si Sigue Sin Funcionar

### Verificar el Workflow Manualmente
1. Ve a **Actions** > **Deploy to GitHub Pages**
2. Haz clic en el último workflow ejecutado
3. Revisa si hay errores en los pasos:
   - Build
   - Deploy

### Verificar que los Archivos se Generaron
El workflow debe generar archivos en la carpeta `out`. Si hay errores en el build, revisa:
- Que todas las dependencias estén instaladas
- Que no haya errores de TypeScript
- Que las imágenes y videos estén en las rutas correctas

### Forzar Nueva Ejecución
Si el workflow no se ejecutó automáticamente:
1. Ve a **Actions**
2. Selecciona "Deploy to GitHub Pages"
3. Haz clic en **Run workflow** (botón arriba a la derecha)
4. Selecciona la rama `main`
5. Haz clic en **Run workflow**

## 📝 Notas Importantes

- La URL siempre será: `https://ddiegovilla.github.io/portafolio/`
- El basePath `/portafolio` es necesario porque el repositorio no se llama igual que tu usuario
- Si cambias algo en el código, solo haz `git push` y se actualizará automáticamente

## 🆘 Si Nada Funciona

1. Verifica que el repositorio sea público (GitHub Pages requiere repos públicos en el plan gratuito)
2. Verifica que tengas permisos de escritura en el repositorio
3. Revisa los logs del workflow para ver errores específicos

