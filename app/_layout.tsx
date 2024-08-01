
import { AppProvider } from '@realm/react';
import { Slot } from 'expo-router';

export default function RootLayout() {

  return (
    <AppProvider id="<app_id>">
      <Slot />
    </AppProvider>
  );
}
