import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type MaxPostRequestBody } from './maxPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMaxPostRequestBody(maxPostRequestBody: MaxPostRequestBody | undefined = {} as MaxPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { maxPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
