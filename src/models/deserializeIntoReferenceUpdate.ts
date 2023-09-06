import { type ReferenceUpdate } from './referenceUpdate';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoReferenceUpdate(referenceUpdate: ReferenceUpdate | undefined = {} as ReferenceUpdate) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.id": n => { referenceUpdate.odataId = n.getStringValue(); },
        "@odata.type": n => { referenceUpdate.odataType = n.getStringValue(); },
    }
}
