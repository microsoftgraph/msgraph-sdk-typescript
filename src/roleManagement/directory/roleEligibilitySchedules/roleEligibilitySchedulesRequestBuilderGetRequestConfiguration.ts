import {RoleEligibilitySchedulesRequestBuilderGetQueryParameters} from './roleEligibilitySchedulesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RoleEligibilitySchedulesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: RoleEligibilitySchedulesRequestBuilderGetQueryParameters | undefined;
}
