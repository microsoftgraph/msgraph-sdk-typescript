import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createPlannerBucketFromDiscriminatorValue} from './createPlannerBucketFromDiscriminatorValue';
import {createPlannerPlanContainerFromDiscriminatorValue} from './createPlannerPlanContainerFromDiscriminatorValue';
import {createPlannerPlanDetailsFromDiscriminatorValue} from './createPlannerPlanDetailsFromDiscriminatorValue';
import {createPlannerTaskFromDiscriminatorValue} from './createPlannerTaskFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {IdentitySet} from './identitySet';
import {PlannerBucket} from './plannerBucket';
import {PlannerPlan} from './plannerPlan';
import {PlannerPlanContainer} from './plannerPlanContainer';
import {PlannerPlanDetails} from './plannerPlanDetails';
import {PlannerTask} from './plannerTask';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializePlannerBucket} from './serializePlannerBucket';
import {serializePlannerPlanContainer} from './serializePlannerPlanContainer';
import {serializePlannerPlanDetails} from './serializePlannerPlanDetails';
import {serializePlannerTask} from './serializePlannerTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerPlan(plannerPlan: PlannerPlan | undefined = {} as PlannerPlan) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(plannerPlan),
        "buckets": n => { plannerPlan.buckets = n.getCollectionOfObjectValues<PlannerBucket>(createPlannerBucketFromDiscriminatorValue); },
        "container": n => { plannerPlan.container = n.getObjectValue<PlannerPlanContainer>(createPlannerPlanContainerFromDiscriminatorValue); },
        "createdBy": n => { plannerPlan.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "createdDateTime": n => { plannerPlan.createdDateTime = n.getDateValue(); },
        "details": n => { plannerPlan.details = n.getObjectValue<PlannerPlanDetails>(createPlannerPlanDetailsFromDiscriminatorValue); },
        "owner": n => { plannerPlan.owner = n.getStringValue(); },
        "tasks": n => { plannerPlan.tasks = n.getCollectionOfObjectValues<PlannerTask>(createPlannerTaskFromDiscriminatorValue); },
        "title": n => { plannerPlan.title = n.getStringValue(); },
    }
}
