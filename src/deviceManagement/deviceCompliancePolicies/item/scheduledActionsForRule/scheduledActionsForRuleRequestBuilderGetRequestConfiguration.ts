import { type ScheduledActionsForRuleRequestBuilderGetQueryParameters } from './scheduledActionsForRuleRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ScheduledActionsForRuleRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ScheduledActionsForRuleRequestBuilderGetQueryParameters | undefined;
}
