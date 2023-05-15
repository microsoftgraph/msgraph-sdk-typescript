import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {ExtensionProperty} from './extensionProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExtensionProperty(extensionProperty: ExtensionProperty | undefined = {} as ExtensionProperty) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(extensionProperty),
        "appDisplayName": n => { extensionProperty.appDisplayName = n.getStringValue(); },
        "dataType": n => { extensionProperty.dataType = n.getStringValue(); },
        "isSyncedFromOnPremises": n => { extensionProperty.isSyncedFromOnPremises = n.getBooleanValue(); },
        "name": n => { extensionProperty.name = n.getStringValue(); },
        "targetObjects": n => { extensionProperty.targetObjects = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
