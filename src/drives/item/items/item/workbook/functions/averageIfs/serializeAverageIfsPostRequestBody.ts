import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AverageIfsPostRequestBody} from './averageIfsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAverageIfsPostRequestBody(averageIfsPostRequestBody: AverageIfsPostRequestBody | undefined = {} as AverageIfsPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("averageRange", averageIfsPostRequestBody.averageRange, serializeJson);
        writer.writeObjectValue<Json>("values", averageIfsPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(averageIfsPostRequestBody.additionalData);
}
