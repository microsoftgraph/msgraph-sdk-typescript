import { createPlannerPlanFromDiscriminatorValue } from './createPlannerPlanFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type PlannerGroup } from './plannerGroup';
import { type PlannerPlan } from './plannerPlan';
import { serializePlannerPlan } from './serializePlannerPlan';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerGroup(plannerGroup: PlannerGroup | undefined = {} as PlannerGroup) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(plannerGroup),
        "plans": n => { plannerGroup.plans = n.getCollectionOfObjectValues<PlannerPlan>(createPlannerPlanFromDiscriminatorValue); },
    }
}
