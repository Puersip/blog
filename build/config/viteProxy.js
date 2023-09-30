import { getProxyConfig } from '../../settings/proxy-config';

export function createViteProxy(proxyType, isUseProxy = true) {
  if (!isUseProxy) return undefined;

  const proxyConfig = getProxyConfig(proxyType);
  console.log(proxyConfig);
  const proxy = {
    [proxyConfig.prefix]: {
      target: proxyConfig.target,
      changeOrigin: true,
      rewrite: (path) => path.replace(new RegExp(`^${proxyConfig.prefix}`), ''),
    },
  };
  return proxy;
}
