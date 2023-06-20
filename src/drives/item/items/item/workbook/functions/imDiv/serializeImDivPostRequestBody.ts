import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImDivPostRequestBody} from './imDivPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImDivPostRequestBody(imDivPostRequestBody: ImDivPostRequestBody | undefined = {} as ImDivPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("inumber1", imDivPostRequestBody.inumber1, serializeJson);
        writer.writeObjectValue<Json>("inumber2", imDivPostRequestBody.inumber2, serializeJson);
        writer.writeAdditionalData(imDivPostRequestBody.additionalData);
}
