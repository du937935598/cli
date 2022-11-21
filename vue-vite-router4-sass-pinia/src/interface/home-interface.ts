interface menuAuthorityInterface {
  name: string;
  path: string;
  id: string;
  children?: menuAuthorityInterface[];
}

export type { menuAuthorityInterface };
