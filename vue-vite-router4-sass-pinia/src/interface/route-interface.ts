interface addRouteInterface {
  path: string;
  name: string;
  title: string;
  component: string;
  children?: addRouteInterface[];
}
export type { addRouteInterface };
