import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type RightPostRequestBody } from './rightPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRightPostRequestBody(rightPostRequestBody: RightPostRequestBody | undefined = {} as RightPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "numChars": n => { rightPostRequestBody.numChars = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "text": n => { rightPostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
