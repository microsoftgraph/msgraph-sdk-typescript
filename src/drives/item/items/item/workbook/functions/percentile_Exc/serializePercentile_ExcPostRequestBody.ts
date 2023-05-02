import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Percentile_ExcPostRequestBody} from './percentile_ExcPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePercentile_ExcPostRequestBody(writer: SerializationWriter, percentile_ExcPostRequestBody: Percentile_ExcPostRequestBody | undefined = {} as Percentile_ExcPostRequestBody) : void {
        writer.writeObjectValue<Json>("array", percentile_ExcPostRequestBody.array, serializeJson);
        writer.writeObjectValue<Json>("k", percentile_ExcPostRequestBody.k, serializeJson);
        writer.writeAdditionalData(percentile_ExcPostRequestBody.additionalData);
}
