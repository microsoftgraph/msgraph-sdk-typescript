import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AverageAPostRequestBody} from './averageAPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAverageAPostRequestBody(averageAPostRequestBody: AverageAPostRequestBody | undefined = {} as AverageAPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("values", averageAPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(averageAPostRequestBody.additionalData);
}
