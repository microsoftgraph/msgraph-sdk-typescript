import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type LargePostRequestBody } from './largePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoLargePostRequestBody(largePostRequestBody: LargePostRequestBody | undefined = {} as LargePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "array": n => { largePostRequestBody.array = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "k": n => { largePostRequestBody.k = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
