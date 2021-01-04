abstract class Es5BaseError extends Error {
  protected constructor(errorMessage: string) {
    super(errorMessage);
    Object.setPrototypeOf(this, new.target.prototype);
  }

  get errorName() {
    return this.constructor.name;
  }
}

class MyError1 extends Es5BaseError {
  // name = 'MyError1'

  constructor(message: string) {
    super(message);
  }
}

class MyError2 extends Es5BaseError {
  name = 'MyError2'

  constructor(message: string) {
    super(message);
  }
}

try {
  throw new MyError1('some-error');
} catch (error) {
  console.log("### error", error);
  console.log("### error.name", error.name);
  console.log("### error.constructor.name", error.constructor.name);
  console.log("### error.errorName", error.errorName);
  console.log("### error instanceof Error:", error instanceof Error);
  console.log("### error instanceof Es5BaseError:", error instanceof Es5BaseError);
  console.log("### error instanceof MyError1:", error instanceof MyError1);
  console.log("### error instanceof MyError2:", error instanceof MyError2);
}
