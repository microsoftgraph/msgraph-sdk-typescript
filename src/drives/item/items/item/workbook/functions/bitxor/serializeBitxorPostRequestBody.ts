import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type BitxorPostRequestBody } from './bitxorPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBitxorPostRequestBody(writer: SerializationWriter, bitxorPostRequestBody: BitxorPostRequestBody | undefined = {} as BitxorPostRequestBody) : void {
        writer.writeObjectValue<Json>("number1", bitxorPostRequestBody.number1, serializeJson);
        writer.writeObjectValue<Json>("number2", bitxorPostRequestBody.number2, serializeJson);
        writer.writeAdditionalData(bitxorPostRequestBody.additionalData);
}
