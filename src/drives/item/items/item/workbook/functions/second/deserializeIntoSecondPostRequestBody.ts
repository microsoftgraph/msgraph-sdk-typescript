import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type SecondPostRequestBody } from './secondPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSecondPostRequestBody(secondPostRequestBody: SecondPostRequestBody | undefined = {} as SecondPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "serialNumber": n => { secondPostRequestBody.serialNumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
