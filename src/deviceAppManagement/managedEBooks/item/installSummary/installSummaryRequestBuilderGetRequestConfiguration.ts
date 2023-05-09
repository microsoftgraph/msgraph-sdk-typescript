import {InstallSummaryRequestBuilderGetQueryParameters} from './installSummaryRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface InstallSummaryRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: InstallSummaryRequestBuilderGetQueryParameters | undefined;
}
