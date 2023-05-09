import {TriggerTypesRequestBuilderGetQueryParameters} from './triggerTypesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TriggerTypesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: TriggerTypesRequestBuilderGetQueryParameters | undefined;
}
