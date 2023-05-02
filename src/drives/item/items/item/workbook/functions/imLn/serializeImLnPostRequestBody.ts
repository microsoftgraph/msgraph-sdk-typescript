import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImLnPostRequestBody} from './imLnPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImLnPostRequestBody(writer: SerializationWriter, imLnPostRequestBody: ImLnPostRequestBody | undefined = {} as ImLnPostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imLnPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imLnPostRequestBody.additionalData);
}
