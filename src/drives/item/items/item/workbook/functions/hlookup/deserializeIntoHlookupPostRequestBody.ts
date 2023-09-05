import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type HlookupPostRequestBody } from './hlookupPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoHlookupPostRequestBody(hlookupPostRequestBody: HlookupPostRequestBody | undefined = {} as HlookupPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "lookupValue": n => { hlookupPostRequestBody.lookupValue = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rangeLookup": n => { hlookupPostRequestBody.rangeLookup = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rowIndexNum": n => { hlookupPostRequestBody.rowIndexNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "tableArray": n => { hlookupPostRequestBody.tableArray = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
