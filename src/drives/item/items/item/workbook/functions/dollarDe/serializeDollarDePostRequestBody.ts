import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type DollarDePostRequestBody } from './dollarDePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDollarDePostRequestBody(writer: SerializationWriter, dollarDePostRequestBody: DollarDePostRequestBody | undefined = {} as DollarDePostRequestBody) : void {
        writer.writeObjectValue<Json>("fraction", dollarDePostRequestBody.fraction, serializeJson);
        writer.writeObjectValue<Json>("fractionalDollar", dollarDePostRequestBody.fractionalDollar, serializeJson);
        writer.writeAdditionalData(dollarDePostRequestBody.additionalData);
}
