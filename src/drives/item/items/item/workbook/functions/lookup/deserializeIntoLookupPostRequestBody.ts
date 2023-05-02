import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {LookupPostRequestBody} from './lookupPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLookupPostRequestBody(lookupPostRequestBody: LookupPostRequestBody | undefined = {} as LookupPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "lookupValue": n => { lookupPostRequestBody.lookupValue = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "lookupVector": n => { lookupPostRequestBody.lookupVector = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "resultVector": n => { lookupPostRequestBody.resultVector = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
