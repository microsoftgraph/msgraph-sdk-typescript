import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {MidbPostRequestBody} from './midbPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMidbPostRequestBody(midbPostRequestBody: MidbPostRequestBody | undefined = {} as MidbPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("numBytes", midbPostRequestBody.numBytes, serializeJson);
        writer.writeObjectValue<Json>("startNum", midbPostRequestBody.startNum, serializeJson);
        writer.writeObjectValue<Json>("text", midbPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(midbPostRequestBody.additionalData);
}
