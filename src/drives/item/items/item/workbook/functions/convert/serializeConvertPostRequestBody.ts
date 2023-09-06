import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ConvertPostRequestBody } from './convertPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeConvertPostRequestBody(writer: SerializationWriter, convertPostRequestBody: ConvertPostRequestBody | undefined = {} as ConvertPostRequestBody) : void {
        writer.writeObjectValue<Json>("fromUnit", convertPostRequestBody.fromUnit, serializeJson);
        writer.writeObjectValue<Json>("number", convertPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("toUnit", convertPostRequestBody.toUnit, serializeJson);
        writer.writeAdditionalData(convertPostRequestBody.additionalData);
}
