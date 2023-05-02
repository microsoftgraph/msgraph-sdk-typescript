import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {MedianPostRequestBody} from './medianPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMedianPostRequestBody(writer: SerializationWriter, medianPostRequestBody: MedianPostRequestBody | undefined = {} as MedianPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", medianPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(medianPostRequestBody.additionalData);
}
