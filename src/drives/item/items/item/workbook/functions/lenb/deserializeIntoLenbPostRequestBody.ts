import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type LenbPostRequestBody } from './lenbPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoLenbPostRequestBody(lenbPostRequestBody: LenbPostRequestBody | undefined = {} as LenbPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "text": n => { lenbPostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
