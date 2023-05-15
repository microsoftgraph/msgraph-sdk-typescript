import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Rank_EqPostRequestBody} from './rank_EqPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRank_EqPostRequestBody(rank_EqPostRequestBody: Rank_EqPostRequestBody | undefined = {} as Rank_EqPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { rank_EqPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "order": n => { rank_EqPostRequestBody.order = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "ref": n => { rank_EqPostRequestBody.ref = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
