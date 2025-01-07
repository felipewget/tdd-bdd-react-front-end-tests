import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import { HttpResponse, http } from "msw";
import { server } from "../../../mocks/server";
import OrderEntry from "../OrderEntry";
import userEvent from "@testing-library/user-event";
import { beforeEach } from "node:test";
import { server } from "../../../mocks/server";

beforeAll(() => server.listen())
beforeEach(() => server.resetHandlers())
afterAll(() => server.close())

test("handles error for scoops and toppings routes", async () => {
  server.resetHandlers(
    http.get("http://localhost:3030/scoops", () => {
      return new HttpResponse(null, { status: 500 });
    }),
    http.get("http://localhost:3030/toppings", () => {
      return new HttpResponse(null, { status: 500 });
    })
  );

  render(<OrderEntry />);

  const alerts = await screen.findAllByRole("alert");
  expect(alerts).toHaveLength(2);
});

test("disable order button if there are no scoops ordered", async () => {
  const user = userEvent.setup();
  render(<OrderEntry setOrderPhase={vi.fn()} />);

  // order button should be disabled at first, even before options load
  const orderButton = screen.getByRole("button", { name: /order sundae/i });
  expect(orderButton).toBeDisabled();

  // expect button to be enabled after adding scoop
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "1");
  expect(orderButton).toBeEnabled();

  // expect button to be disabled again after removing scoop
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "0");
  expect(orderButton).toBeDisabled();
});

/// page
// tests
// -> linked with pages

//  or with component


describe('user event', async () => {
  const user = userEvent.setup();
  render(<button>Click me</button>);

  await user.click(screen.getByText('Click me'));
})

// mock serve response // MSW
// npm i msw
// crate handlers
// test servers
// serve listen during all tests
// reserr after each tests

/// Adding context
// />
// import { render } from "@testing-library/react";
// import { OrderDetailsProvider } from "../contexts/OrderDetails";

// const renderWithContext = (ui, options) =>
//   render(ui, { wrapper: OrderDetailsProvider, ...options });

//  await waitFor(() => expect(screen.getByText(/data loaded/i)).toBeInTheDocument());