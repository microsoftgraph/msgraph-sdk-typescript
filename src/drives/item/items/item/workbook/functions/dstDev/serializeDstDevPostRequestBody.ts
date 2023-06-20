import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DstDevPostRequestBody} from './dstDevPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDstDevPostRequestBody(dstDevPostRequestBody: DstDevPostRequestBody | undefined = {} as DstDevPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("criteria", dstDevPostRequestBody.criteria, serializeJson);
        writer.writeObjectValue<Json>("database", dstDevPostRequestBody.database, serializeJson);
        writer.writeObjectValue<Json>("field", dstDevPostRequestBody.field, serializeJson);
        writer.writeAdditionalData(dstDevPostRequestBody.additionalData);
}
