import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImCotPostRequestBody} from './imCotPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImCotPostRequestBody(imCotPostRequestBody: ImCotPostRequestBody | undefined = {} as ImCotPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("inumber", imCotPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imCotPostRequestBody.additionalData);
}
