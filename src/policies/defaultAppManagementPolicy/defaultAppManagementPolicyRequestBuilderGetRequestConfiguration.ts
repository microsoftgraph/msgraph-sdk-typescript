import {DefaultAppManagementPolicyRequestBuilderGetQueryParameters} from './defaultAppManagementPolicyRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface DefaultAppManagementPolicyRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DefaultAppManagementPolicyRequestBuilderGetQueryParameters | undefined;
}
