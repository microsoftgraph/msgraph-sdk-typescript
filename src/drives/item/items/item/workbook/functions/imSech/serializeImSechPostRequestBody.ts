import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImSechPostRequestBody} from './imSechPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImSechPostRequestBody(imSechPostRequestBody: ImSechPostRequestBody | undefined = {} as ImSechPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("inumber", imSechPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imSechPostRequestBody.additionalData);
}
