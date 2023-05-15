import {createPlannerTaskFromDiscriminatorValue} from './createPlannerTaskFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {PlannerBucket} from './plannerBucket';
import {PlannerTask} from './plannerTask';
import {serializePlannerTask} from './serializePlannerTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerBucket(plannerBucket: PlannerBucket | undefined = {} as PlannerBucket) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(plannerBucket),
        "name": n => { plannerBucket.name = n.getStringValue(); },
        "orderHint": n => { plannerBucket.orderHint = n.getStringValue(); },
        "planId": n => { plannerBucket.planId = n.getStringValue(); },
        "tasks": n => { plannerBucket.tasks = n.getCollectionOfObjectValues<PlannerTask>(createPlannerTaskFromDiscriminatorValue); },
    }
}
