import { type EducationSchoolItemRequestBuilderGetQueryParameters } from './educationSchoolItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface EducationSchoolItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: EducationSchoolItemRequestBuilderGetQueryParameters | undefined;
}
