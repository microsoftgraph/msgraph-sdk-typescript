import {EducationRubricItemRequestBuilderGetQueryParameters} from './educationRubricItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface EducationRubricItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: EducationRubricItemRequestBuilderGetQueryParameters | undefined;
}
