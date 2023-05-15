import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Rank_EqPostRequestBody} from './rank_EqPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRank_EqPostRequestBody(writer: SerializationWriter, rank_EqPostRequestBody: Rank_EqPostRequestBody | undefined = {} as Rank_EqPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", rank_EqPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("order", rank_EqPostRequestBody.order, serializeJson);
        writer.writeObjectValue<Json>("ref", rank_EqPostRequestBody.ref, serializeJson);
        writer.writeAdditionalData(rank_EqPostRequestBody.additionalData);
}
