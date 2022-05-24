import {EducationSubmissionResourceItemRequestBuilderGetQueryParameters} from './educationSubmissionResourceItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface EducationSubmissionResourceItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:EducationSubmissionResourceItemRequestBuilderGetQueryParameters | undefined;
}
