import { type MobileAppConfigurationsRequestBuilderGetQueryParameters } from './mobileAppConfigurationsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface MobileAppConfigurationsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: MobileAppConfigurationsRequestBuilderGetQueryParameters | undefined;
}
