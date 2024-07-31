import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const styles = {
  global: (props: any) => ({
    body: {
      bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.100',
      color: props.colorMode === 'dark' ? 'white' : 'gray.900',
    },
  }),
};

const theme = extendTheme({ config, styles });

export default theme;