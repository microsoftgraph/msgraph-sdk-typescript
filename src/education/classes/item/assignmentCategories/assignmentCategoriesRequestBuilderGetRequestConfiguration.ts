import {AssignmentCategoriesRequestBuilderGetQueryParameters} from './assignmentCategoriesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AssignmentCategoriesRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:AssignmentCategoriesRequestBuilderGetQueryParameters | undefined;
}
