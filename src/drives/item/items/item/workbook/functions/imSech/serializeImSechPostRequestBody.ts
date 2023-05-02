import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImSechPostRequestBody} from './imSechPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImSechPostRequestBody(writer: SerializationWriter, imSechPostRequestBody: ImSechPostRequestBody | undefined = {} as ImSechPostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imSechPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imSechPostRequestBody.additionalData);
}
