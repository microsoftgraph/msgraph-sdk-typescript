import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type RightbPostRequestBody } from './rightbPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRightbPostRequestBody(rightbPostRequestBody: RightbPostRequestBody | undefined = {} as RightbPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "numBytes": n => { rightbPostRequestBody.numBytes = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "text": n => { rightbPostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
