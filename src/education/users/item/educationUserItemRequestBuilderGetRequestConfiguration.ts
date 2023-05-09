import {EducationUserItemRequestBuilderGetQueryParameters} from './educationUserItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface EducationUserItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: EducationUserItemRequestBuilderGetQueryParameters | undefined;
}
