import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Quartile_ExcPostRequestBody } from './quartile_ExcPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoQuartile_ExcPostRequestBody(quartile_ExcPostRequestBody: Quartile_ExcPostRequestBody | undefined = {} as Quartile_ExcPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "array": n => { quartile_ExcPostRequestBody.array = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "quart": n => { quartile_ExcPostRequestBody.quart = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
