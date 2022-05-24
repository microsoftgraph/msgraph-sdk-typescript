import {EducationSchoolItemRequestBuilderGetQueryParameters} from './educationSchoolItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface EducationSchoolItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:EducationSchoolItemRequestBuilderGetQueryParameters | undefined;
}
