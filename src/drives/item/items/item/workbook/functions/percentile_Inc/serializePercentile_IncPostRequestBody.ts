import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Percentile_IncPostRequestBody} from './percentile_IncPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePercentile_IncPostRequestBody(writer: SerializationWriter, percentile_IncPostRequestBody: Percentile_IncPostRequestBody | undefined = {} as Percentile_IncPostRequestBody) : void {
        writer.writeObjectValue<Json>("array", percentile_IncPostRequestBody.array, serializeJson);
        writer.writeObjectValue<Json>("k", percentile_IncPostRequestBody.k, serializeJson);
        writer.writeAdditionalData(percentile_IncPostRequestBody.additionalData);
}
