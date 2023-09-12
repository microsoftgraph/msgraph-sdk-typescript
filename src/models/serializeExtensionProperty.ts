import { type ExtensionProperty } from './extensionProperty';
import { serializeDirectoryObject } from './serializeDirectoryObject';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeExtensionProperty(writer: SerializationWriter, extensionProperty: ExtensionProperty | undefined = {} as ExtensionProperty) : void {
        serializeDirectoryObject(writer, extensionProperty)
        writer.writeStringValue("appDisplayName", extensionProperty.appDisplayName);
        writer.writeStringValue("dataType", extensionProperty.dataType);
        writer.writeBooleanValue("isSyncedFromOnPremises", extensionProperty.isSyncedFromOnPremises);
        writer.writeStringValue("name", extensionProperty.name);
        writer.writeCollectionOfPrimitiveValues<string>("targetObjects", extensionProperty.targetObjects);
}
