import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {MatchPostRequestBody} from './matchPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMatchPostRequestBody(matchPostRequestBody: MatchPostRequestBody | undefined = {} as MatchPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "lookupArray": n => { matchPostRequestBody.lookupArray = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "lookupValue": n => { matchPostRequestBody.lookupValue = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "matchType": n => { matchPostRequestBody.matchType = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
