export class BaseResponse {
  data: unknown;

  constructor(data?: unknown) {
    this.data = data;
  }
}
