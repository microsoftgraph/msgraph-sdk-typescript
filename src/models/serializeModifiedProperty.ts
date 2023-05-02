import {ModifiedProperty} from './modifiedProperty';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeModifiedProperty(writer: SerializationWriter, modifiedProperty: ModifiedProperty | undefined = {} as ModifiedProperty) : void {
        writer.writeStringValue("displayName", modifiedProperty.displayName);
        writer.writeStringValue("newValue", modifiedProperty.newValue);
        writer.writeStringValue("@odata.type", modifiedProperty.odataType);
        writer.writeStringValue("oldValue", modifiedProperty.oldValue);
        writer.writeAdditionalData(modifiedProperty.additionalData);
}
