import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {XirrPostRequestBody} from './xirrPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoXirrPostRequestBody(xirrPostRequestBody: XirrPostRequestBody | undefined = {} as XirrPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "dates": n => { xirrPostRequestBody.dates = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "guess": n => { xirrPostRequestBody.guess = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "values": n => { xirrPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
