import { type Planner } from './planner';
import { type PlannerBucket } from './plannerBucket';
import { type PlannerPlan } from './plannerPlan';
import { type PlannerTask } from './plannerTask';
import { serializeEntity } from './serializeEntity';
import { serializePlannerBucket } from './serializePlannerBucket';
import { serializePlannerPlan } from './serializePlannerPlan';
import { serializePlannerTask } from './serializePlannerTask';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePlanner(writer: SerializationWriter, planner: Planner | undefined = {} as Planner) : void {
        serializeEntity(writer, planner)
        writer.writeCollectionOfObjectValues<PlannerBucket>("buckets", planner.buckets, serializePlannerBucket);
        writer.writeCollectionOfObjectValues<PlannerPlan>("plans", planner.plans, serializePlannerPlan);
        writer.writeCollectionOfObjectValues<PlannerTask>("tasks", planner.tasks, serializePlannerTask);
}
