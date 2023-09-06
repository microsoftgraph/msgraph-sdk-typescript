import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type MatchPostRequestBody } from './matchPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMatchPostRequestBody(matchPostRequestBody: MatchPostRequestBody | undefined = {} as MatchPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "lookupArray": n => { matchPostRequestBody.lookupArray = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "lookupValue": n => { matchPostRequestBody.lookupValue = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "matchType": n => { matchPostRequestBody.matchType = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
