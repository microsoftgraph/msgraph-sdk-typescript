import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type PercentRank_IncPostRequestBody } from './percentRank_IncPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPercentRank_IncPostRequestBody(percentRank_IncPostRequestBody: PercentRank_IncPostRequestBody | undefined = {} as PercentRank_IncPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "array": n => { percentRank_IncPostRequestBody.array = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "significance": n => { percentRank_IncPostRequestBody.significance = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "x": n => { percentRank_IncPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
