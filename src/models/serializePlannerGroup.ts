import type {PlannerGroup} from './plannerGroup';
import type {PlannerPlan} from './plannerPlan';
import {serializeEntity} from './serializeEntity';
import {serializePlannerPlan} from './serializePlannerPlan';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerGroup(writer: SerializationWriter, plannerGroup: PlannerGroup | undefined = {} as PlannerGroup) : void {
        serializeEntity(writer, plannerGroup)
        writer.writeCollectionOfObjectValues<PlannerPlan>("plans", plannerGroup.plans, serializePlannerPlan);
}
