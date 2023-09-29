export function isDarkMode() {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  // 当夜间模式变化时的处理逻辑
  if (mediaQuery.matches) {
    console.log('夜间模式已启用');
  } else {
    console.log('夜间模式未启用');
  }
  return mediaQuery.matches;
}
