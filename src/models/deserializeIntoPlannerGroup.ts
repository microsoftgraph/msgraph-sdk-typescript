import {createPlannerPlanFromDiscriminatorValue} from './createPlannerPlanFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {PlannerGroup} from './plannerGroup';
import {PlannerPlan} from './plannerPlan';
import {serializePlannerPlan} from './serializePlannerPlan';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerGroup(plannerGroup: PlannerGroup | undefined = {} as PlannerGroup) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(plannerGroup),
        "plans": n => { plannerGroup.plans = n.getCollectionOfObjectValues<PlannerPlan>(createPlannerPlanFromDiscriminatorValue); },
    }
}
