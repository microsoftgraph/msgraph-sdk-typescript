import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface RiskDetectionsRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
}
