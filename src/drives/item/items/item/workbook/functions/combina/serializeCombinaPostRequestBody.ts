import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type CombinaPostRequestBody } from './combinaPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCombinaPostRequestBody(writer: SerializationWriter, combinaPostRequestBody: CombinaPostRequestBody | undefined = {} as CombinaPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", combinaPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("numberChosen", combinaPostRequestBody.numberChosen, serializeJson);
        writer.writeAdditionalData(combinaPostRequestBody.additionalData);
}
