import type { VastAiInstance } from "./3rd-party/VastAiInstance";
import type { VastAiSearchResponse } from "./3rd-party/VastAiSearchResponse";

export type VastaiConnectionMap = {
  "vastai.search": {
    request: {
      options?: Partial<{}>;
      body: {
        area?: "offers";
        query: string;
      };
    };
    response: VastAiSearchResponse;
    headers: {
      url?: string;
      authToken?: string;
    };
  };
  "vastai.show.instances": {
    request: {
      options?: Partial<{}>;
      body: {};
    };
    response: VastAiInstance[];
    headers: {
      url?: string;
      authToken?: string;
    };
  };
  "vastai.create.instance": {
    request: {
      options?: Partial<{}>;
      body: {
        machineId: number;
        image: string;
        diskGb?: number;
        env?: Record<string, string>;
        exposedPortMappings?: Record<number, number>;
      };
    };
    response: { contractId: number };
    headers: {
      url?: string;
      authToken?: string;
    };
  };
  "vastai.connect.instance": {
    request: {
      options?: Partial<{}>;
      body: {
        contractId: number;
        serviceName: string;
      };
    };
    response: { success: boolean };
    headers: {
      url?: string;
      authToken?: string;
    };
  };
  "vastai.destroy.instance": {
    request: {
      options?: Partial<{}>;
      body: {
        contractId: number;
      };
    };
    response: { success: boolean };
    headers: {
      url?: string;
      authToken?: string;
    };
  };
};
