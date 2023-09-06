import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type OddPostRequestBody } from './oddPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOddPostRequestBody(oddPostRequestBody: OddPostRequestBody | undefined = {} as OddPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { oddPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
