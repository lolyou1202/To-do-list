export type actionsContetnt = {
  text: string;
  background: string;
  picked: boolean;
};

export type person = {
  id: number;
  name: string;
  avatar: string;
  invited: boolean;
  picked: boolean;
};

export type noteList = {
  id: number;
  name: string;
  description: string;
  priority: string;
  action: string;
  date: number[];
  invite: number[];
  stage: string;
};

export type arrayCalendar = {
    id: number
    value: number
    classes: string
    active: boolean
};
