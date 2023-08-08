import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImSechPostRequestBody} from './imSechPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImSechPostRequestBody(writer: SerializationWriter, imSechPostRequestBody: ImSechPostRequestBody | undefined = {} as ImSechPostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imSechPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imSechPostRequestBody.additionalData);
}
