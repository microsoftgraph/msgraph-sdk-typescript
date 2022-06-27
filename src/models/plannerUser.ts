import {Entity} from './entity';
import {PlannerPlan} from './plannerPlan';
import {PlannerTask} from './plannerTask';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerUser extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Read-only. Nullable. Returns the plannerTasks assigned to the user. */
    plans?: PlannerPlan[] | undefined;
    /** Read-only. Nullable. Returns the plannerTasks assigned to the user. */
    tasks?: PlannerTask[] | undefined;
}
