// auto bind decorator
export function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalDescriptor = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalDescriptor.bind(this);
      return boundFn;
    },
  };

  return adjDescriptor;
}
