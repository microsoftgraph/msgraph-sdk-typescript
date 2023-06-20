import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImRealPostRequestBody} from './imRealPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImRealPostRequestBody(imRealPostRequestBody: ImRealPostRequestBody | undefined = {} as ImRealPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("inumber", imRealPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imRealPostRequestBody.additionalData);
}
