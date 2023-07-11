import {DataPolicyOperationItemRequestBuilderGetQueryParameters} from './dataPolicyOperationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DataPolicyOperationItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DataPolicyOperationItemRequestBuilderGetQueryParameters | undefined;
}
