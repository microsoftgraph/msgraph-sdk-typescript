import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Ceiling_PrecisePostRequestBody } from './ceiling_PrecisePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCeiling_PrecisePostRequestBody(ceiling_PrecisePostRequestBody: Ceiling_PrecisePostRequestBody | undefined = {} as Ceiling_PrecisePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { ceiling_PrecisePostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "significance": n => { ceiling_PrecisePostRequestBody.significance = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
