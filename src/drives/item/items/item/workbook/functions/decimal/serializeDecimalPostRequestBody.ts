import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type DecimalPostRequestBody } from './decimalPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDecimalPostRequestBody(writer: SerializationWriter, decimalPostRequestBody: DecimalPostRequestBody | undefined = {} as DecimalPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", decimalPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("radix", decimalPostRequestBody.radix, serializeJson);
        writer.writeAdditionalData(decimalPostRequestBody.additionalData);
}
