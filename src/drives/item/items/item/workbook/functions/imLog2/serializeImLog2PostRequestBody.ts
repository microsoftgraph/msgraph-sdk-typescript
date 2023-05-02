import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImLog2PostRequestBody} from './imLog2PostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImLog2PostRequestBody(writer: SerializationWriter, imLog2PostRequestBody: ImLog2PostRequestBody | undefined = {} as ImLog2PostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imLog2PostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imLog2PostRequestBody.additionalData);
}
