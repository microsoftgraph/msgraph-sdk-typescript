import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImLog10PostRequestBody} from './imLog10PostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImLog10PostRequestBody(writer: SerializationWriter, imLog10PostRequestBody: ImLog10PostRequestBody | undefined = {} as ImLog10PostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imLog10PostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imLog10PostRequestBody.additionalData);
}
