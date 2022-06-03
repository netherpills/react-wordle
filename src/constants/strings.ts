export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['nashe', 'buenardo', 'god', 'de ruta', 'de rutherford', 'ido']
export const GAME_COPIED_MESSAGE = 'Partida copiada al portapapeles'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Faltan letras'
export const WORD_NOT_FOUND_MESSAGE = 'Palabra no encontrada'
export const HARD_MODE_ALERT_MESSAGE =
  'El modo dificil solo se puede habilitar al principio'
export const HARD_MODE_DESCRIPTION =
  'Todas las pistas reveladas deberán ser usadas en los siguientes intentos'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Para cambiar de color los espacios'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `La palabra era ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Tenés que usar ${guess} en la posición ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `El acierto debe contener ${letter}`
export const ENTER_TEXT = 'Probar'
export const DELETE_TEXT = 'Borrar'
export const STATISTICS_TITLE = 'Estadísticas'
export const GUESS_DISTRIBUTION_TEXT = 'Distribución de Aciertos'
export const NEW_WORD_TEXT = 'Nueva palabra en'
export const SHARE_TEXT = 'Compartir'
export const TOTAL_TRIES_TEXT = 'Total de intentos'
export const SUCCESS_RATE_TEXT = 'Tasa de éxito'
export const CURRENT_STREAK_TEXT = 'Racha actual'
export const BEST_STREAK_TEXT = 'Mejor racha'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "You are using an embedded browser and may experience problems sharing or saving your results. We encourage you rather to use your device's default browser."
