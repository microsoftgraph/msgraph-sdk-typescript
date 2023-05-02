import {Label} from './label';
import {Property} from './property';
import {PropertyType} from './propertyType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProperty(writer: SerializationWriter, property: Property | undefined = {} as Property) : void {
        writer.writeCollectionOfPrimitiveValues<string>("aliases", property.aliases);
        writer.writeBooleanValue("isQueryable", property.isQueryable);
        writer.writeBooleanValue("isRefinable", property.isRefinable);
        writer.writeBooleanValue("isRetrievable", property.isRetrievable);
        writer.writeBooleanValue("isSearchable", property.isSearchable);
        if(property.labels)
        writer.writeEnumValue<Label>("labels", ...property.labels);
        writer.writeStringValue("name", property.name);
        writer.writeStringValue("@odata.type", property.odataType);
        writer.writeEnumValue<PropertyType>("type", property.type);
        writer.writeAdditionalData(property.additionalData);
}
