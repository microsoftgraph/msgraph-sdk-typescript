import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {MidbPostRequestBody} from './midbPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMidbPostRequestBody(writer: SerializationWriter, midbPostRequestBody: MidbPostRequestBody | undefined = {} as MidbPostRequestBody) : void {
        writer.writeObjectValue<Json>("numBytes", midbPostRequestBody.numBytes, serializeJson);
        writer.writeObjectValue<Json>("startNum", midbPostRequestBody.startNum, serializeJson);
        writer.writeObjectValue<Json>("text", midbPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(midbPostRequestBody.additionalData);
}
