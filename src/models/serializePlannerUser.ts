import type {PlannerPlan} from './plannerPlan';
import type {PlannerTask} from './plannerTask';
import type {PlannerUser} from './plannerUser';
import {serializeEntity} from './serializeEntity';
import {serializePlannerPlan} from './serializePlannerPlan';
import {serializePlannerTask} from './serializePlannerTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerUser(writer: SerializationWriter, plannerUser: PlannerUser | undefined = {} as PlannerUser) : void {
        serializeEntity(writer, plannerUser)
        writer.writeCollectionOfObjectValues<PlannerPlan>("plans", plannerUser.plans, serializePlannerPlan);
        writer.writeCollectionOfObjectValues<PlannerTask>("tasks", plannerUser.tasks, serializePlannerTask);
}
