import { type WindowsInformationProtectionResourceCollection } from './windowsInformationProtectionResourceCollection';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionResourceCollection(writer: SerializationWriter, windowsInformationProtectionResourceCollection: WindowsInformationProtectionResourceCollection | undefined = {} as WindowsInformationProtectionResourceCollection) : void {
        writer.writeStringValue("displayName", windowsInformationProtectionResourceCollection.displayName);
        writer.writeStringValue("@odata.type", windowsInformationProtectionResourceCollection.odataType);
        writer.writeCollectionOfPrimitiveValues<string>("resources", windowsInformationProtectionResourceCollection.resources);
        writer.writeAdditionalData(windowsInformationProtectionResourceCollection.additionalData);
}
