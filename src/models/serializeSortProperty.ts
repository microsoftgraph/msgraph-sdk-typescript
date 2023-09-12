import { type SortProperty } from './sortProperty';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSortProperty(writer: SerializationWriter, sortProperty: SortProperty | undefined = {} as SortProperty) : void {
        writer.writeBooleanValue("isDescending", sortProperty.isDescending);
        writer.writeStringValue("name", sortProperty.name);
        writer.writeStringValue("@odata.type", sortProperty.odataType);
        writer.writeAdditionalData(sortProperty.additionalData);
}
