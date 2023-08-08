import {InformationProtectionRequestBuilderGetQueryParameters} from './informationProtectionRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface InformationProtectionRequestBuilderGetRequestConfiguration {
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
    queryParameters?: InformationProtectionRequestBuilderGetQueryParameters | undefined;
}
