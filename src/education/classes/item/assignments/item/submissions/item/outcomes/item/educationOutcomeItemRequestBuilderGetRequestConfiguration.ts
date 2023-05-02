import {EducationOutcomeItemRequestBuilderGetQueryParameters} from './educationOutcomeItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface EducationOutcomeItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: EducationOutcomeItemRequestBuilderGetQueryParameters | undefined;
}
