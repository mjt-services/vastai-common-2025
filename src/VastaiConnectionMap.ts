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
};
