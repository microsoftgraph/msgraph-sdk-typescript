import {Planner} from './planner';
import {PlannerBucket} from './plannerBucket';
import {PlannerPlan} from './plannerPlan';
import {PlannerTask} from './plannerTask';
import {serializeEntity} from './serializeEntity';
import {serializePlannerBucket} from './serializePlannerBucket';
import {serializePlannerPlan} from './serializePlannerPlan';
import {serializePlannerTask} from './serializePlannerTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlanner(writer: SerializationWriter, planner: Planner | undefined = {} as Planner) : void {
        serializeEntity(writer, planner)
        writer.writeCollectionOfObjectValues<PlannerBucket>("buckets", planner.buckets, serializePlannerBucket);
        writer.writeCollectionOfObjectValues<PlannerPlan>("plans", planner.plans, serializePlannerPlan);
        writer.writeCollectionOfObjectValues<PlannerTask>("tasks", planner.tasks, serializePlannerTask);
}
