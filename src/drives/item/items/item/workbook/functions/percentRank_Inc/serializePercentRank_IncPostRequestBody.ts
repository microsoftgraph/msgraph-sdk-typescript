import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {PercentRank_IncPostRequestBody} from './percentRank_IncPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePercentRank_IncPostRequestBody(writer: SerializationWriter, percentRank_IncPostRequestBody: PercentRank_IncPostRequestBody | undefined = {} as PercentRank_IncPostRequestBody) : void {
        writer.writeObjectValue<Json>("array", percentRank_IncPostRequestBody.array, serializeJson);
        writer.writeObjectValue<Json>("significance", percentRank_IncPostRequestBody.significance, serializeJson);
        writer.writeObjectValue<Json>("x", percentRank_IncPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(percentRank_IncPostRequestBody.additionalData);
}
