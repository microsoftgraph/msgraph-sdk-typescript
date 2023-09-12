import { createPlannerBucketFromDiscriminatorValue } from './createPlannerBucketFromDiscriminatorValue';
import { createPlannerPlanFromDiscriminatorValue } from './createPlannerPlanFromDiscriminatorValue';
import { createPlannerTaskFromDiscriminatorValue } from './createPlannerTaskFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type Planner } from './planner';
import { type PlannerBucket } from './plannerBucket';
import { type PlannerPlan } from './plannerPlan';
import { type PlannerTask } from './plannerTask';
import { serializePlannerBucket } from './serializePlannerBucket';
import { serializePlannerPlan } from './serializePlannerPlan';
import { serializePlannerTask } from './serializePlannerTask';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPlanner(planner: Planner | undefined = {} as Planner) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(planner),
        "buckets": n => { planner.buckets = n.getCollectionOfObjectValues<PlannerBucket>(createPlannerBucketFromDiscriminatorValue); },
        "plans": n => { planner.plans = n.getCollectionOfObjectValues<PlannerPlan>(createPlannerPlanFromDiscriminatorValue); },
        "tasks": n => { planner.tasks = n.getCollectionOfObjectValues<PlannerTask>(createPlannerTaskFromDiscriminatorValue); },
    }
}
