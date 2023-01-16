export const events = [
  {
    id: 1,
    start: new Date("2023-01-15 13:00:00"),
    end: new Date("2023-01-15 15:00:00"),
    title: "Cumpleaños del encargado",
    notes: "Hay que comprar el pastel",
  },
  {
    id: 2,
    start: new Date("2023-02-15 13:00:00"),
    end: new Date("2023-02-15 15:00:00"),
    title: "Cumpleaños de Melisa",
    notes: "Alguna nota a Melisa",
  },
];

export const initialState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: null,
};

export const calendarWithEventsState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: null,
};

export const calendarWithActiveEventsState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: { ...events[0] },
};
