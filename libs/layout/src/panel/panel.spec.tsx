import { render } from "@testing-library/react"

import Panel from "./panel"

it("should render successfully", () => {
  const { baseElement } = render(<Panel />)
  expect(baseElement).toBeTruthy()
})