import {ServiceHealthIssueItemRequestBuilderGetQueryParameters} from './serviceHealthIssueItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ServiceHealthIssueItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ServiceHealthIssueItemRequestBuilderGetQueryParameters | undefined;
}
