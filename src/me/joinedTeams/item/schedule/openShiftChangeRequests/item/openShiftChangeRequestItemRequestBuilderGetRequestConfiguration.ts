import {OpenShiftChangeRequestItemRequestBuilderGetQueryParameters} from './openShiftChangeRequestItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OpenShiftChangeRequestItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: OpenShiftChangeRequestItemRequestBuilderGetQueryParameters | undefined;
}
