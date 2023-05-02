import {PlannerContainerType} from './plannerContainerType';
import {PlannerPlanContainer} from './plannerPlanContainer';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerPlanContainer(writer: SerializationWriter, plannerPlanContainer: PlannerPlanContainer | undefined = {} as PlannerPlanContainer) : void {
        writer.writeStringValue("containerId", plannerPlanContainer.containerId);
        writer.writeStringValue("@odata.type", plannerPlanContainer.odataType);
        writer.writeEnumValue<PlannerContainerType>("type", plannerPlanContainer.type);
        writer.writeStringValue("url", plannerPlanContainer.url);
        writer.writeAdditionalData(plannerPlanContainer.additionalData);
}
