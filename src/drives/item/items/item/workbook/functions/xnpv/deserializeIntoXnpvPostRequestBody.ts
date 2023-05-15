import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {XnpvPostRequestBody} from './xnpvPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoXnpvPostRequestBody(xnpvPostRequestBody: XnpvPostRequestBody | undefined = {} as XnpvPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "dates": n => { xnpvPostRequestBody.dates = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rate": n => { xnpvPostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "values": n => { xnpvPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
