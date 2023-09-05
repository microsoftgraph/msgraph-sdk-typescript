import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type LookupPostRequestBody } from './lookupPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoLookupPostRequestBody(lookupPostRequestBody: LookupPostRequestBody | undefined = {} as LookupPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "lookupValue": n => { lookupPostRequestBody.lookupValue = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "lookupVector": n => { lookupPostRequestBody.lookupVector = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "resultVector": n => { lookupPostRequestBody.resultVector = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
