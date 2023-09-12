import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type PermutPostRequestBody } from './permutPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePermutPostRequestBody(writer: SerializationWriter, permutPostRequestBody: PermutPostRequestBody | undefined = {} as PermutPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", permutPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("numberChosen", permutPostRequestBody.numberChosen, serializeJson);
        writer.writeAdditionalData(permutPostRequestBody.additionalData);
}
