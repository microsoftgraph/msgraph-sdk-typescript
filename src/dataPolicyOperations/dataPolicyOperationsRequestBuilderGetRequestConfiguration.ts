import {DataPolicyOperationsRequestBuilderGetQueryParameters} from './dataPolicyOperationsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DataPolicyOperationsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DataPolicyOperationsRequestBuilderGetQueryParameters | undefined;
}
