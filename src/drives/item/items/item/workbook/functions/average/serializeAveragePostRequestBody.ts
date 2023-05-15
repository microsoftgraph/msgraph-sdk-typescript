import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AveragePostRequestBody} from './averagePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAveragePostRequestBody(writer: SerializationWriter, averagePostRequestBody: AveragePostRequestBody | undefined = {} as AveragePostRequestBody) : void {
        writer.writeObjectValue<Json>("values", averagePostRequestBody.values, serializeJson);
        writer.writeAdditionalData(averagePostRequestBody.additionalData);
}
