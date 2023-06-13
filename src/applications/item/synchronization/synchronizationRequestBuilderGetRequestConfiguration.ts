import {SynchronizationRequestBuilderGetQueryParameters} from './synchronizationRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SynchronizationRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: SynchronizationRequestBuilderGetQueryParameters | undefined;
}
