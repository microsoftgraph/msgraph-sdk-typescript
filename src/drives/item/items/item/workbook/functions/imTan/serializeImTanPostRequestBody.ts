import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImTanPostRequestBody} from './imTanPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImTanPostRequestBody(imTanPostRequestBody: ImTanPostRequestBody | undefined = {} as ImTanPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("inumber", imTanPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imTanPostRequestBody.additionalData);
}
