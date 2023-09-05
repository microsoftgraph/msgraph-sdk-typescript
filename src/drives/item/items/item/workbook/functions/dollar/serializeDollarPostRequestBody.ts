import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type DollarPostRequestBody } from './dollarPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDollarPostRequestBody(writer: SerializationWriter, dollarPostRequestBody: DollarPostRequestBody | undefined = {} as DollarPostRequestBody) : void {
        writer.writeObjectValue<Json>("decimals", dollarPostRequestBody.decimals, serializeJson);
        writer.writeObjectValue<Json>("number", dollarPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(dollarPostRequestBody.additionalData);
}
