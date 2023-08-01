import type {ReferenceCreate} from './referenceCreate';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoReferenceCreate(referenceCreate: ReferenceCreate | undefined = {} as ReferenceCreate) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.id": n => { referenceCreate.odataId = n.getStringValue(); },
    }
}
