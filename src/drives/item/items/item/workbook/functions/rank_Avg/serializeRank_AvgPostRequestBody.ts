import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Rank_AvgPostRequestBody} from './rank_AvgPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRank_AvgPostRequestBody(writer: SerializationWriter, rank_AvgPostRequestBody: Rank_AvgPostRequestBody | undefined = {} as Rank_AvgPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", rank_AvgPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("order", rank_AvgPostRequestBody.order, serializeJson);
        writer.writeObjectValue<Json>("ref", rank_AvgPostRequestBody.ref, serializeJson);
        writer.writeAdditionalData(rank_AvgPostRequestBody.additionalData);
}
