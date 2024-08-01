import { RealmProvider } from "@realm/react"
import { Slot } from "expo-router"

const AppLayout = () => {
  return <RealmProvider>
    <Slot />
  </RealmProvider>
}

export default AppLayout