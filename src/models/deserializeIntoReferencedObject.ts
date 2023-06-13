import {ReferencedObject} from './referencedObject';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoReferencedObject(referencedObject: ReferencedObject | undefined = {} as ReferencedObject) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { referencedObject.odataType = n.getStringValue(); },
        "referencedObjectName": n => { referencedObject.referencedObjectName = n.getStringValue(); },
        "referencedProperty": n => { referencedObject.referencedProperty = n.getStringValue(); },
    }
}
