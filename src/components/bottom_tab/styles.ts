import { StyleSheet } from "react-native"

export const TAB_BAR_HEIGHT = 72
export const TAB_BAR_MARGIN = 10

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 24,

    height: TAB_BAR_HEIGHT,
    marginHorizontal: TAB_BAR_MARGIN,

    overflow: "hidden",

    flexDirection: "row",
    alignItems: "center",

    borderRadius: 12,
    backgroundColor: "#202020",
  },
  tabContainer: {
    ...StyleSheet.absoluteFillObject,

    alignItems: "center",
    justifyContent: "center",
  },
  tabItem: {
    height: 52,
    width: 52,
    borderRadius: 7,
    backgroundColor: "#363636",
  },
})
