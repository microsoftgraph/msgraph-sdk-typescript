import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type CombinPostRequestBody } from './combinPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCombinPostRequestBody(writer: SerializationWriter, combinPostRequestBody: CombinPostRequestBody | undefined = {} as CombinPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", combinPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("numberChosen", combinPostRequestBody.numberChosen, serializeJson);
        writer.writeAdditionalData(combinPostRequestBody.additionalData);
}
