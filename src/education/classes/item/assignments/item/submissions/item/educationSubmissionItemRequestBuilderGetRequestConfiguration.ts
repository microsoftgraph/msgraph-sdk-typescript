import {EducationSubmissionItemRequestBuilderGetQueryParameters} from './educationSubmissionItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface EducationSubmissionItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: EducationSubmissionItemRequestBuilderGetQueryParameters | undefined;
}
