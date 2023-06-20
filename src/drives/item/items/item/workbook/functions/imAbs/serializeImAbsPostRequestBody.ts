import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImAbsPostRequestBody} from './imAbsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImAbsPostRequestBody(imAbsPostRequestBody: ImAbsPostRequestBody | undefined = {} as ImAbsPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("inumber", imAbsPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imAbsPostRequestBody.additionalData);
}
