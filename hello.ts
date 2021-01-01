abstract class Es5BaseError extends Error {
  protected constructor() {
    super();
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

class MyError1 extends Es5BaseError {
  constructor() {
    super();
  }
}

class MyError2 extends Es5BaseError {
  constructor() {
    super();
  }
}


try {
  throw new MyError1();
} catch (error) {
  console.log("### error instanceof Error:", error instanceof Error);
  console.log("### error instanceof Es5BaseError:", error instanceof Es5BaseError);
  console.log("### error instanceof MyError1:", error instanceof MyError1);
  console.log("### error instanceof MyError2:", error instanceof MyError2);
}
