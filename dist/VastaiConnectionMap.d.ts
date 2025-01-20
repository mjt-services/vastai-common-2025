export type VastaiConnectionMap = {
    "vastai.search": {
        request: {
            options?: Partial<{}>;
            body: {
                area?: "offers";
                query: string;
            };
        };
        response: {
            delta?: string;
            text?: string;
            done?: boolean;
        };
        headers: {
            url?: string;
            authToken?: string;
        };
    };
};
