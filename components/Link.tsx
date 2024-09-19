import { Linking, Button } from "react-native";
import { useCallback } from "react";

type Props = {
  url: string;
  title?: string;
  children: React.JSX.Element;
};

const Link = ({ url, title }: Props) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      //add better error handling here
      alert(`Cannot open URL: ${url}`);
    }
  }, [url]);

  return <Button title={title} onPress={handlePress}></Button>;
};

export default Link;
