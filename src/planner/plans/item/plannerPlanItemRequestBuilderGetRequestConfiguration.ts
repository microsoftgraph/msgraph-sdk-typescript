import {PlannerPlanItemRequestBuilderGetQueryParameters} from './plannerPlanItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PlannerPlanItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: PlannerPlanItemRequestBuilderGetQueryParameters | undefined;
}
