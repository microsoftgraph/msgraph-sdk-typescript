import { type ManagedDeviceMobileAppConfigurationItemRequestBuilderGetQueryParameters } from './managedDeviceMobileAppConfigurationItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ManagedDeviceMobileAppConfigurationItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ManagedDeviceMobileAppConfigurationItemRequestBuilderGetQueryParameters | undefined;
}
