import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {VlookupPostRequestBody} from './vlookupPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVlookupPostRequestBody(vlookupPostRequestBody: VlookupPostRequestBody | undefined = {} as VlookupPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "colIndexNum": n => { vlookupPostRequestBody.colIndexNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "lookupValue": n => { vlookupPostRequestBody.lookupValue = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rangeLookup": n => { vlookupPostRequestBody.rangeLookup = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "tableArray": n => { vlookupPostRequestBody.tableArray = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
