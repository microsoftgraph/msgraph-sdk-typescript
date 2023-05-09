import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Rank_AvgPostRequestBody} from './rank_AvgPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRank_AvgPostRequestBody(rank_AvgPostRequestBody: Rank_AvgPostRequestBody | undefined = {} as Rank_AvgPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { rank_AvgPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "order": n => { rank_AvgPostRequestBody.order = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "ref": n => { rank_AvgPostRequestBody.ref = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
