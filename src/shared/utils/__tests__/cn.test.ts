import { cn } from "../cn"

describe("cn utility function", () => {
  it("should merge class names correctly", () => {
    const result = cn("px-4", "py-2", "bg-blue-500")
    expect(result).toBe("px-4 py-2 bg-blue-500")
  })

  it("should handle conditional classes", () => {
    const isActive = true
    const result = cn("base-class", isActive && "active-class")
    expect(result).toBe("base-class active-class")
  })

  it("should handle falsy values", () => {
    const result = cn("base-class", false, null, undefined, "valid-class")
    expect(result).toBe("base-class valid-class")
  })

  it("should merge conflicting Tailwind classes correctly", () => {
    const result = cn("px-4 px-6", "py-2 py-4")
    expect(result).toBe("px-6 py-4")
  })

  it("should handle arrays of classes", () => {
    const result = cn(["px-4", "py-2"], "bg-blue-500")
    expect(result).toBe("px-4 py-2 bg-blue-500")
  })

  it("should handle objects with boolean values", () => {
    const result = cn({
      "px-4": true,
      "py-2": true,
      "bg-red-500": false,
      "bg-blue-500": true,
    })
    expect(result).toBe("px-4 py-2 bg-blue-500")
  })

  it("should return empty string for no arguments", () => {
    const result = cn()
    expect(result).toBe("")
  })
})
