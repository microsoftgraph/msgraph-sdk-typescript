import { type IdentitySet } from './identitySet';
import { type PlannerBucket } from './plannerBucket';
import { type PlannerPlan } from './plannerPlan';
import { type PlannerPlanContainer } from './plannerPlanContainer';
import { type PlannerPlanDetails } from './plannerPlanDetails';
import { type PlannerTask } from './plannerTask';
import { serializeEntity } from './serializeEntity';
import { serializeIdentitySet } from './serializeIdentitySet';
import { serializePlannerBucket } from './serializePlannerBucket';
import { serializePlannerPlanContainer } from './serializePlannerPlanContainer';
import { serializePlannerPlanDetails } from './serializePlannerPlanDetails';
import { serializePlannerTask } from './serializePlannerTask';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePlannerPlan(writer: SerializationWriter, plannerPlan: PlannerPlan | undefined = {} as PlannerPlan) : void {
        serializeEntity(writer, plannerPlan)
        writer.writeCollectionOfObjectValues<PlannerBucket>("buckets", plannerPlan.buckets, serializePlannerBucket);
        writer.writeObjectValue<PlannerPlanContainer>("container", plannerPlan.container, serializePlannerPlanContainer);
        writer.writeObjectValue<IdentitySet>("createdBy", plannerPlan.createdBy, serializeIdentitySet);
        writer.writeDateValue("createdDateTime", plannerPlan.createdDateTime);
        writer.writeObjectValue<PlannerPlanDetails>("details", plannerPlan.details, serializePlannerPlanDetails);
        writer.writeStringValue("owner", plannerPlan.owner);
        writer.writeCollectionOfObjectValues<PlannerTask>("tasks", plannerPlan.tasks, serializePlannerTask);
        writer.writeStringValue("title", plannerPlan.title);
}
