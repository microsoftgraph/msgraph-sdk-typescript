import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImLog2PostRequestBody} from './imLog2PostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImLog2PostRequestBody(writer: SerializationWriter, imLog2PostRequestBody: ImLog2PostRequestBody | undefined = {} as ImLog2PostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imLog2PostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imLog2PostRequestBody.additionalData);
}
