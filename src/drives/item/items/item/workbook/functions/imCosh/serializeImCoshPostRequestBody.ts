import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImCoshPostRequestBody} from './imCoshPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImCoshPostRequestBody(writer: SerializationWriter, imCoshPostRequestBody: ImCoshPostRequestBody | undefined = {} as ImCoshPostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imCoshPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imCoshPostRequestBody.additionalData);
}
