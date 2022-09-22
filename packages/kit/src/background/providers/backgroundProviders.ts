import { IInjectedProviderNames } from '@onekeyfe/cross-inpage-provider-types';

import { IBackgroundApi, IBackgroundApiBridge } from '../IBackgroundApi';

import ProviderApiAptos from './ProviderApiAptos';
import ProviderApiBase from './ProviderApiBase';
import ProviderApiEthereum from './ProviderApiEthereum';
import ProviderApiNear from './ProviderApiNear';
import ProviderApiPrivate from './ProviderApiPrivate';
import ProviderApiSolana from './ProviderApiSolana';
import ProviderApiStarcoin from './ProviderApiStarcoin';

function createBackgroundProviders({
  backgroundApi,
}: {
  backgroundApi: IBackgroundApiBridge | IBackgroundApi;
}) {
  const backgroundProviders: Record<string, ProviderApiBase> = {
    [IInjectedProviderNames.$private]: new ProviderApiPrivate({
      backgroundApi,
    }),
    [IInjectedProviderNames.ethereum]: new ProviderApiEthereum({
      backgroundApi,
    }),
    [IInjectedProviderNames.solana]: new ProviderApiSolana({
      backgroundApi,
    }),
    [IInjectedProviderNames.starcoin]: new ProviderApiStarcoin({
      backgroundApi,
    }),
    [IInjectedProviderNames.near]: new ProviderApiNear({
      backgroundApi,
    }),
    [IInjectedProviderNames.aptos]: new ProviderApiAptos({
      backgroundApi,
    }),
    // near
    // conflux
    // sollet
  };

  return backgroundProviders;
}

export { createBackgroundProviders };
