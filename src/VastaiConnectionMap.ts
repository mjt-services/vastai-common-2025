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
};
