import { type PlannerExternalReferences } from './plannerExternalReferences';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerExternalReferences(plannerExternalReferences: PlannerExternalReferences | undefined = {} as PlannerExternalReferences) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { plannerExternalReferences.odataType = n.getStringValue(); },
    }
}
