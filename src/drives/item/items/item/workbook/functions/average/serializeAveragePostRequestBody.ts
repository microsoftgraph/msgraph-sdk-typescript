import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AveragePostRequestBody} from './averagePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAveragePostRequestBody(averagePostRequestBody: AveragePostRequestBody | undefined = {} as AveragePostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("values", averagePostRequestBody.values, serializeJson);
        writer.writeAdditionalData(averagePostRequestBody.additionalData);
}
