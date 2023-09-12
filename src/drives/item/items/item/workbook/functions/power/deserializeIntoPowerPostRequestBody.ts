import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type PowerPostRequestBody } from './powerPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPowerPostRequestBody(powerPostRequestBody: PowerPostRequestBody | undefined = {} as PowerPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { powerPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "power": n => { powerPostRequestBody.power = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
