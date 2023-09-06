import { deserializeIntoDirectoryObject } from './deserializeIntoDirectoryObject';
import { type ExtensionProperty } from './extensionProperty';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

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
