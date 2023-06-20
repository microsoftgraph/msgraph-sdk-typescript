import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AverageIfPostRequestBody} from './averageIfPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAverageIfPostRequestBody(averageIfPostRequestBody: AverageIfPostRequestBody | undefined = {} as AverageIfPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("averageRange", averageIfPostRequestBody.averageRange, serializeJson);
        writer.writeObjectValue<Json>("criteria", averageIfPostRequestBody.criteria, serializeJson);
        writer.writeObjectValue<Json>("range", averageIfPostRequestBody.range, serializeJson);
        writer.writeAdditionalData(averageIfPostRequestBody.additionalData);
}
