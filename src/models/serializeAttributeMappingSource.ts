import {AttributeMappingSource} from './attributeMappingSource';
import {AttributeMappingSourceType} from './attributeMappingSourceType';
import {serializeStringKeyAttributeMappingSourceValuePair} from './serializeStringKeyAttributeMappingSourceValuePair';
import {StringKeyAttributeMappingSourceValuePair} from './stringKeyAttributeMappingSourceValuePair';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttributeMappingSource(writer: SerializationWriter, attributeMappingSource: AttributeMappingSource | undefined = {} as AttributeMappingSource) : void {
        writer.writeStringValue("expression", attributeMappingSource.expression);
        writer.writeStringValue("name", attributeMappingSource.name);
        writer.writeStringValue("@odata.type", attributeMappingSource.odataType);
        writer.writeCollectionOfObjectValues<StringKeyAttributeMappingSourceValuePair>("parameters", attributeMappingSource.parameters, serializeStringKeyAttributeMappingSourceValuePair);
        writer.writeEnumValue<AttributeMappingSourceType>("type", attributeMappingSource.type);
        writer.writeAdditionalData(attributeMappingSource.additionalData);
}
