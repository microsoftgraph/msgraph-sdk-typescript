import {EmployeeExperienceRequestBuilderGetQueryParameters} from './employeeExperienceRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface EmployeeExperienceRequestBuilderGetRequestConfiguration {
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
    queryParameters?: EmployeeExperienceRequestBuilderGetQueryParameters | undefined;
}
