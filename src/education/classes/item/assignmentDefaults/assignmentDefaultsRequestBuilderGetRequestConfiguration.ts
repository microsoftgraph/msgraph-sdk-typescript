import {AssignmentDefaultsRequestBuilderGetQueryParameters} from './assignmentDefaultsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AssignmentDefaultsRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:AssignmentDefaultsRequestBuilderGetQueryParameters | undefined;
}
