import { type ModifiedProperty } from './modifiedProperty';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoModifiedProperty(modifiedProperty: ModifiedProperty | undefined = {} as ModifiedProperty) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { modifiedProperty.displayName = n.getStringValue(); },
        "newValue": n => { modifiedProperty.newValue = n.getStringValue(); },
        "@odata.type": n => { modifiedProperty.odataType = n.getStringValue(); },
        "oldValue": n => { modifiedProperty.oldValue = n.getStringValue(); },
    }
}
