import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type CountAPostRequestBody } from './countAPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCountAPostRequestBody(countAPostRequestBody: CountAPostRequestBody | undefined = {} as CountAPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { countAPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
