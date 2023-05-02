import {ModifiedProperty} from './modifiedProperty';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoModifiedProperty(modifiedProperty: ModifiedProperty | undefined = {} as ModifiedProperty) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { modifiedProperty.displayName = n.getStringValue(); },
        "newValue": n => { modifiedProperty.newValue = n.getStringValue(); },
        "@odata.type": n => { modifiedProperty.odataType = n.getStringValue(); },
        "oldValue": n => { modifiedProperty.oldValue = n.getStringValue(); },
    }
}
