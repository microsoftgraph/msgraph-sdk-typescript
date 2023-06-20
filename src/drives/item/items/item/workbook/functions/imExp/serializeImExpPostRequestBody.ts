import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImExpPostRequestBody} from './imExpPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImExpPostRequestBody(imExpPostRequestBody: ImExpPostRequestBody | undefined = {} as ImExpPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("inumber", imExpPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imExpPostRequestBody.additionalData);
}
