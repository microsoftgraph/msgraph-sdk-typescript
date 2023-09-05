import { createPlannerTaskFromDiscriminatorValue } from './createPlannerTaskFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type PlannerBucket } from './plannerBucket';
import { type PlannerTask } from './plannerTask';
import { serializePlannerTask } from './serializePlannerTask';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerBucket(plannerBucket: PlannerBucket | undefined = {} as PlannerBucket) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(plannerBucket),
        "name": n => { plannerBucket.name = n.getStringValue(); },
        "orderHint": n => { plannerBucket.orderHint = n.getStringValue(); },
        "planId": n => { plannerBucket.planId = n.getStringValue(); },
        "tasks": n => { plannerBucket.tasks = n.getCollectionOfObjectValues<PlannerTask>(createPlannerTaskFromDiscriminatorValue); },
    }
}
