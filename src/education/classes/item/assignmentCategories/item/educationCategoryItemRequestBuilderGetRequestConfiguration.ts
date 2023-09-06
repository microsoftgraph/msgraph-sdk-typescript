import { type EducationCategoryItemRequestBuilderGetQueryParameters } from './educationCategoryItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface EducationCategoryItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: EducationCategoryItemRequestBuilderGetQueryParameters | undefined;
}
