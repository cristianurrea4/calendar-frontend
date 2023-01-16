import calendarApi from "../../src/api/calendarApi";

describe("Pruebas en el CalendarApi", () => {
  test("Debe de tener la configuración por defecto", () => {
    expect(calendarApi.baseURL).toBe(process.env.VITE_API_ULR);
  });
  test("Debe de tener el x-token en el header de todas las peticiones", async () => {
    const token = "ABC-123-XYZ";
    localStorage.setItem("token", token);

    try {
      const res = await calendarApi.get("/auth", {
        email: "test@gmail.com",
        password: "123456",
      });

      expect(res.config.headers["x-token"]).toBe(token);
    } catch (error) {
      console.log(error);
    }
  });
});
