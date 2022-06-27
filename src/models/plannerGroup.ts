import {Entity} from './entity';
import {PlannerPlan} from './plannerPlan';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerGroup extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Read-only. Nullable. Returns the plannerPlans owned by the group. */
    plans?: PlannerPlan[] | undefined;
}
