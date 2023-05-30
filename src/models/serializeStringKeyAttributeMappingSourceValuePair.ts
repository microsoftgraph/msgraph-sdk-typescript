import {AttributeMappingSource} from './attributeMappingSource';
import {serializeAttributeMappingSource} from './serializeAttributeMappingSource';
import {StringKeyAttributeMappingSourceValuePair} from './stringKeyAttributeMappingSourceValuePair';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStringKeyAttributeMappingSourceValuePair(writer: SerializationWriter, stringKeyAttributeMappingSourceValuePair: StringKeyAttributeMappingSourceValuePair | undefined = {} as StringKeyAttributeMappingSourceValuePair) : void {
        writer.writeStringValue("key", stringKeyAttributeMappingSourceValuePair.key);
        writer.writeStringValue("@odata.type", stringKeyAttributeMappingSourceValuePair.odataType);
        writer.writeObjectValue<AttributeMappingSource>("value", stringKeyAttributeMappingSourceValuePair.value, serializeAttributeMappingSource);
        writer.writeAdditionalData(stringKeyAttributeMappingSourceValuePair.additionalData);
}
