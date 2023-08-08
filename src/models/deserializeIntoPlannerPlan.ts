import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createPlannerBucketFromDiscriminatorValue} from './createPlannerBucketFromDiscriminatorValue';
import {createPlannerPlanContainerFromDiscriminatorValue} from './createPlannerPlanContainerFromDiscriminatorValue';
import {createPlannerPlanDetailsFromDiscriminatorValue} from './createPlannerPlanDetailsFromDiscriminatorValue';
import {createPlannerTaskFromDiscriminatorValue} from './createPlannerTaskFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {IdentitySet} from './identitySet';
import type {PlannerBucket} from './plannerBucket';
import type {PlannerPlan} from './plannerPlan';
import type {PlannerPlanContainer} from './plannerPlanContainer';
import type {PlannerPlanDetails} from './plannerPlanDetails';
import type {PlannerTask} from './plannerTask';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializePlannerBucket} from './serializePlannerBucket';
import {serializePlannerPlanContainer} from './serializePlannerPlanContainer';
import {serializePlannerPlanDetails} from './serializePlannerPlanDetails';
import {serializePlannerTask} from './serializePlannerTask';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
