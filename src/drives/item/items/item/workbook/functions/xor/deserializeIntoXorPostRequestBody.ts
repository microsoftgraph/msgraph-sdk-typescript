import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {XorPostRequestBody} from './xorPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoXorPostRequestBody(xorPostRequestBody: XorPostRequestBody | undefined = {} as XorPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { xorPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
