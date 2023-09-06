import { type TimeOffReasonsRequestBuilderGetQueryParameters } from './timeOffReasonsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface TimeOffReasonsRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
    /**
     * Request query parameters
     */
    queryParameters?: TimeOffReasonsRequestBuilderGetQueryParameters | undefined;
}
