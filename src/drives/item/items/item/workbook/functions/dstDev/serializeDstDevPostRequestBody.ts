import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {DstDevPostRequestBody} from './dstDevPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDstDevPostRequestBody(writer: SerializationWriter, dstDevPostRequestBody: DstDevPostRequestBody | undefined = {} as DstDevPostRequestBody) : void {
        writer.writeObjectValue<Json>("criteria", dstDevPostRequestBody.criteria, serializeJson);
        writer.writeObjectValue<Json>("database", dstDevPostRequestBody.database, serializeJson);
        writer.writeObjectValue<Json>("field", dstDevPostRequestBody.field, serializeJson);
        writer.writeAdditionalData(dstDevPostRequestBody.additionalData);
}
