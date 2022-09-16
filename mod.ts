import { IS_BROWSER } from "https://deno.land/x/fresh@1.0.2/runtime.ts";
import jss, { SheetsRegistry, Styles, StyleSheetFactoryOptions, StyleSheet } from 'https://esm.sh/jss@10.9.2';
import nested from 'https://esm.sh/jss-plugin-nested'

jss.use(nested());

export function createRegistry() {
  const registry = new SheetsRegistry();
  const createUseStyles = <Name extends string | number | symbol>(
    styles: Partial<Styles<Name, any, undefined>>, 
    options?: StyleSheetFactoryOptions): () => StyleSheet<Name> => {
    const sheet = jss.createStyleSheet(styles, options);
    return () => {
      if (IS_BROWSER) {
        sheet.attach();
      } else {
        registry.add(sheet);
      }
      return sheet;
    };
  };
  return { registry, createUseStyles };  
}
