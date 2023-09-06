import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type MaxAPostRequestBody } from './maxAPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMaxAPostRequestBody(maxAPostRequestBody: MaxAPostRequestBody | undefined = {} as MaxAPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { maxAPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
