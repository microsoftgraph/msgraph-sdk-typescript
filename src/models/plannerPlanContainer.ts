import {PlannerContainerType} from './plannerContainerType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerPlanContainer extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The identifier of the resource that contains the plan. */
    containerId?: string | undefined;
    /** The type of the resource that contains the plan. See the previous table for supported types. Possible values are: group, unknownFutureValue, roster. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value in this evolvable enum: roster. */
    type?: PlannerContainerType | undefined;
    /** The full canonical URL of the container. */
    url?: string | undefined;
}
