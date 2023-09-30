import { StatusBar } from 'expo-status-bar'
import { ProviderState } from './src/provider/ProviderState'
import { Home } from './src/screens/Home'

export default function App() {
  return (
    <ProviderState>
      <StatusBar style="light" translucent  />
      <Home />
    </ProviderState>
  );
}

