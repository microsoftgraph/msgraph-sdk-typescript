import {EducationAssignmentItemRequestBuilderGetQueryParameters} from './educationAssignmentItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface EducationAssignmentItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: EducationAssignmentItemRequestBuilderGetQueryParameters | undefined;
}
