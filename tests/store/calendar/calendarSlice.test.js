import {
  calendarSlice,
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvents,
  onLogoutCalendar,
  onSetActiveEvent,
  onUpdateEvent,
} from "../../../src/store/calendar/calendarSlice";
import {
  calendarWithActiveEventsState,
  calendarWithEventsState,
  events,
  initialState,
} from "../../fixtures/calendarState";

describe("Pruebas en calendarSlice", () => {
  test("Debe de regresar el estado por defecto", () => {
    const state = calendarSlice.getInitialState();
    expect(state).toEqual(initialState);
  });

  test("onSetActiveEvent de activar el evento", () => {
    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onSetActiveEvent(events[0])
    );
    expect(state.activeEvent).toEqual(events[0]);
  });

  test("onAddNewEvent debe de agregar el evento", () => {
    const newEvent = {
      id: 3,
      start: new Date("2023-02-15 13:00:00"),
      end: new Date("2023-02-15 15:00:00"),
      title: "Cumpleaños de Fernando",
      notes: "Alguna nota!",
    };

    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onAddNewEvent(newEvent)
    );
    expect(state.events).toEqual([...events, newEvent]);
  });

  test("onUpdateEvent debe de agregar el evento", () => {
    const updateEvent = {
      id: 1,
      start: new Date("2023-02-16 14:00:00"),
      end: new Date("2023-02-16 18:00:00"),
      title: "Cumpleaños de Fernando update",
      notes: "Alguna nota! update",
    };

    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onUpdateEvent(updateEvent)
    );
    expect(state.events).toContain(updateEvent);
  });

  test("onDeleteEvent debe de borrar el evento activo", () => {
    const state = calendarSlice.reducer(
      calendarWithActiveEventsState,
      onDeleteEvent()
    );
    expect(state.activeEvent).toBe(null);
    expect(state.events).not.toContain(events[0]);
  });

  test("onLoadEvents debe de establecer los eventos", () => {
    const state = calendarSlice.reducer(initialState, onLoadEvents(events));
    expect(state.isLoadingEvents).toBeFalsy();
    expect(state.events).toEqual(events);
    const newState = calendarSlice.reducer(state, onLoadEvents(events));
    expect(newState.events.length).toBe(events.length);
  });

  test("onLogoutCalendar debe de limipar el estado", () => {
    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onLogoutCalendar(events)
    );
    expect(state).toEqual(initialState);
  });
});
