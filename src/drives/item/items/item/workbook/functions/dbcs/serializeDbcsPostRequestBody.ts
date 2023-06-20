import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DbcsPostRequestBody} from './dbcsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDbcsPostRequestBody(dbcsPostRequestBody: DbcsPostRequestBody | undefined = {} as DbcsPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("text", dbcsPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(dbcsPostRequestBody.additionalData);
}
