import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImPowerPostRequestBody} from './imPowerPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImPowerPostRequestBody(imPowerPostRequestBody: ImPowerPostRequestBody | undefined = {} as ImPowerPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("inumber", imPowerPostRequestBody.inumber, serializeJson);
        writer.writeObjectValue<Json>("number", imPowerPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(imPowerPostRequestBody.additionalData);
}
