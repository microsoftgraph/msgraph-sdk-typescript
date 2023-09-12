import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ChoosePostRequestBody } from './choosePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeChoosePostRequestBody(writer: SerializationWriter, choosePostRequestBody: ChoosePostRequestBody | undefined = {} as ChoosePostRequestBody) : void {
        writer.writeObjectValue<Json>("indexNum", choosePostRequestBody.indexNum, serializeJson);
        writer.writeObjectValue<Json>("values", choosePostRequestBody.values, serializeJson);
        writer.writeAdditionalData(choosePostRequestBody.additionalData);
}
