import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type NotPostRequestBody } from './notPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeNotPostRequestBody(writer: SerializationWriter, notPostRequestBody: NotPostRequestBody | undefined = {} as NotPostRequestBody) : void {
        writer.writeObjectValue<Json>("logical", notPostRequestBody.logical, serializeJson);
        writer.writeAdditionalData(notPostRequestBody.additionalData);
}
