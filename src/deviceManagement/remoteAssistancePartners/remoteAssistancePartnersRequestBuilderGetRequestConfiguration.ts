import {RemoteAssistancePartnersRequestBuilderGetQueryParameters} from './remoteAssistancePartnersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RemoteAssistancePartnersRequestBuilderGetRequestConfiguration {
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
    queryParameters?: RemoteAssistancePartnersRequestBuilderGetQueryParameters | undefined;
}
