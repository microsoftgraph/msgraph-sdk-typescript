import {PlannerContainerType} from './plannerContainerType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerPlanContainer extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The identifier of the resource that contains the plan. Optional.
     */
    containerId?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The type of the resource that contains the plan. For supported types, see the previous table. Possible values are: group, unknownFutureValue, roster. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value in this evolvable enum: roster. Optional.
     */
    type?: PlannerContainerType | undefined;
    /**
     * The full canonical URL of the container. Optional.
     */
    url?: string | undefined;
}
