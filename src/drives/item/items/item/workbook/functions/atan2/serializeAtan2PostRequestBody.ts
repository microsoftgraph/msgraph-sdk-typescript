import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Atan2PostRequestBody} from './atan2PostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAtan2PostRequestBody(writer: SerializationWriter, atan2PostRequestBody: Atan2PostRequestBody | undefined = {} as Atan2PostRequestBody) : void {
        writer.writeObjectValue<Json>("xNum", atan2PostRequestBody.xNum, serializeJson);
        writer.writeObjectValue<Json>("yNum", atan2PostRequestBody.yNum, serializeJson);
        writer.writeAdditionalData(atan2PostRequestBody.additionalData);
}
