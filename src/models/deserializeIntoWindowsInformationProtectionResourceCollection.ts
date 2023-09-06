import { type WindowsInformationProtectionResourceCollection } from './windowsInformationProtectionResourceCollection';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionResourceCollection(windowsInformationProtectionResourceCollection: WindowsInformationProtectionResourceCollection | undefined = {} as WindowsInformationProtectionResourceCollection) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { windowsInformationProtectionResourceCollection.displayName = n.getStringValue(); },
        "@odata.type": n => { windowsInformationProtectionResourceCollection.odataType = n.getStringValue(); },
        "resources": n => { windowsInformationProtectionResourceCollection.resources = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
