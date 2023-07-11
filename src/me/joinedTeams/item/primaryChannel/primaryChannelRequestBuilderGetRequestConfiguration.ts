import {PrimaryChannelRequestBuilderGetQueryParameters} from './primaryChannelRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PrimaryChannelRequestBuilderGetRequestConfiguration {
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
    queryParameters?: PrimaryChannelRequestBuilderGetQueryParameters | undefined;
}
