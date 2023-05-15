import {WindowsInformationProtectionResourceCollection} from './windowsInformationProtectionResourceCollection';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionResourceCollection(windowsInformationProtectionResourceCollection: WindowsInformationProtectionResourceCollection | undefined = {} as WindowsInformationProtectionResourceCollection) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { windowsInformationProtectionResourceCollection.displayName = n.getStringValue(); },
        "@odata.type": n => { windowsInformationProtectionResourceCollection.odataType = n.getStringValue(); },
        "resources": n => { windowsInformationProtectionResourceCollection.resources = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
