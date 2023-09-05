import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ValuePostRequestBody } from './valuePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoValuePostRequestBody(valuePostRequestBody: ValuePostRequestBody | undefined = {} as ValuePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "text": n => { valuePostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
