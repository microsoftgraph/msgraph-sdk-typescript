import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImCotPostRequestBody} from './imCotPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImCotPostRequestBody(writer: SerializationWriter, imCotPostRequestBody: ImCotPostRequestBody | undefined = {} as ImCotPostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imCotPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imCotPostRequestBody.additionalData);
}
