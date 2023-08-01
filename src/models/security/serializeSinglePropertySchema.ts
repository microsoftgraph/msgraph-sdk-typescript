import type {SinglePropertySchema} from './singlePropertySchema';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSinglePropertySchema(writer: SerializationWriter, singlePropertySchema: SinglePropertySchema | undefined = {} as SinglePropertySchema) : void {
        writer.writeStringValue("name", singlePropertySchema.name);
        writer.writeStringValue("@odata.type", singlePropertySchema.odataType);
        writer.writeStringValue("type", singlePropertySchema.type);
        writer.writeAdditionalData(singlePropertySchema.additionalData);
}
