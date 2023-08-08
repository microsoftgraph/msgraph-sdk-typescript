import {UserStatusSummaryRequestBuilderGetQueryParameters} from './userStatusSummaryRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface UserStatusSummaryRequestBuilderGetRequestConfiguration {
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
    queryParameters?: UserStatusSummaryRequestBuilderGetQueryParameters | undefined;
}
