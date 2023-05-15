import {PlannerContainerType} from './plannerContainerType';
import {PlannerPlanContainer} from './plannerPlanContainer';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerPlanContainer(plannerPlanContainer: PlannerPlanContainer | undefined = {} as PlannerPlanContainer) : Record<string, (node: ParseNode) => void> {
    return {
        "containerId": n => { plannerPlanContainer.containerId = n.getStringValue(); },
        "@odata.type": n => { plannerPlanContainer.odataType = n.getStringValue(); },
        "type": n => { plannerPlanContainer.type = n.getEnumValue<PlannerContainerType>(PlannerContainerType); },
        "url": n => { plannerPlanContainer.url = n.getStringValue(); },
    }
}
