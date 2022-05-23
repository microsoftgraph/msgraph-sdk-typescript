import {AssignmentPolicyRequestBuilderGetQueryParameters} from './assignmentPolicyRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AssignmentPolicyRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:AssignmentPolicyRequestBuilderGetQueryParameters | undefined;
}
