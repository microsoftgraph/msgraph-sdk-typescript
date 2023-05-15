import {TargetedManagedAppConfigurationItemRequestBuilderGetQueryParameters} from './targetedManagedAppConfigurationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TargetedManagedAppConfigurationItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: TargetedManagedAppConfigurationItemRequestBuilderGetQueryParameters | undefined;
}
