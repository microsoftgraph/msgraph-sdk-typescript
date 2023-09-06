import { type DataPolicyOperationsRequestBuilderGetQueryParameters } from './dataPolicyOperationsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

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
