import { Linking, Button } from "react-native";
import { useCallback } from "react";

type LinkProps = {
  url: string;
  children: string;
};

const Link = ({ url, children }: LinkProps) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      //add better error handling here
      alert(`Cannot open URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

export default Link;
