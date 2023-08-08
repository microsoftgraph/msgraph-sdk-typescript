import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImRealPostRequestBody} from './imRealPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImRealPostRequestBody(writer: SerializationWriter, imRealPostRequestBody: ImRealPostRequestBody | undefined = {} as ImRealPostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imRealPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imRealPostRequestBody.additionalData);
}
