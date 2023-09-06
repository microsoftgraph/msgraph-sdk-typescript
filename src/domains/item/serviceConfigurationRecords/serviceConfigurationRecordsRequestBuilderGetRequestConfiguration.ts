import { type ServiceConfigurationRecordsRequestBuilderGetQueryParameters } from './serviceConfigurationRecordsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ServiceConfigurationRecordsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ServiceConfigurationRecordsRequestBuilderGetQueryParameters | undefined;
}
