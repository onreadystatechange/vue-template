declare type gender = 0 | 1 | 2;

declare type Business = {
  storage: StorageVirtualClass,
  request: RequestVirtualClass
};

declare type Config = {
  env: 'dev' | 'gqc' | 'prd',
  name: string,
  version: string,
  versionCode: number,
  build: number
};

declare type Device = {
  deviceId: string
}

