import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ConcatenatePostRequestBody } from './concatenatePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoConcatenatePostRequestBody(concatenatePostRequestBody: ConcatenatePostRequestBody | undefined = {} as ConcatenatePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { concatenatePostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
