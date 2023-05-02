import {PlannerExternalReferences} from './plannerExternalReferences';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerExternalReferences(plannerExternalReferences: PlannerExternalReferences | undefined = {} as PlannerExternalReferences) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { plannerExternalReferences.odataType = n.getStringValue(); },
    }
}
