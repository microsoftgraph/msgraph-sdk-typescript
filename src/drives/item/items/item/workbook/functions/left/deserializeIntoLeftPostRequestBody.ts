import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type LeftPostRequestBody } from './leftPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoLeftPostRequestBody(leftPostRequestBody: LeftPostRequestBody | undefined = {} as LeftPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "numChars": n => { leftPostRequestBody.numChars = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "text": n => { leftPostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
