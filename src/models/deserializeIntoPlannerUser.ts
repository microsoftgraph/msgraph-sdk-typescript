import { createPlannerPlanFromDiscriminatorValue } from './createPlannerPlanFromDiscriminatorValue';
import { createPlannerTaskFromDiscriminatorValue } from './createPlannerTaskFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type PlannerPlan } from './plannerPlan';
import { type PlannerTask } from './plannerTask';
import { type PlannerUser } from './plannerUser';
import { serializePlannerPlan } from './serializePlannerPlan';
import { serializePlannerTask } from './serializePlannerTask';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerUser(plannerUser: PlannerUser | undefined = {} as PlannerUser) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(plannerUser),
        "plans": n => { plannerUser.plans = n.getCollectionOfObjectValues<PlannerPlan>(createPlannerPlanFromDiscriminatorValue); },
        "tasks": n => { plannerUser.tasks = n.getCollectionOfObjectValues<PlannerTask>(createPlannerTaskFromDiscriminatorValue); },
    }
}
