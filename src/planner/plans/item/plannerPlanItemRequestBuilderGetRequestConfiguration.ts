import { type PlannerPlanItemRequestBuilderGetQueryParameters } from './plannerPlanItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface PlannerPlanItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: PlannerPlanItemRequestBuilderGetQueryParameters | undefined;
}
