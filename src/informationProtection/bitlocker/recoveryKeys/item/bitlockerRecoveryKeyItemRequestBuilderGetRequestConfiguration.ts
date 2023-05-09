import {BitlockerRecoveryKeyItemRequestBuilderGetQueryParameters} from './bitlockerRecoveryKeyItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface BitlockerRecoveryKeyItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: BitlockerRecoveryKeyItemRequestBuilderGetQueryParameters | undefined;
}
