import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImSinPostRequestBody} from './imSinPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImSinPostRequestBody(imSinPostRequestBody: ImSinPostRequestBody | undefined = {} as ImSinPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("inumber", imSinPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imSinPostRequestBody.additionalData);
}
