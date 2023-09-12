import { type PlannerGroup } from './plannerGroup';
import { type PlannerPlan } from './plannerPlan';
import { serializeEntity } from './serializeEntity';
import { serializePlannerPlan } from './serializePlannerPlan';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePlannerGroup(writer: SerializationWriter, plannerGroup: PlannerGroup | undefined = {} as PlannerGroup) : void {
        serializeEntity(writer, plannerGroup)
        writer.writeCollectionOfObjectValues<PlannerPlan>("plans", plannerGroup.plans, serializePlannerPlan);
}
