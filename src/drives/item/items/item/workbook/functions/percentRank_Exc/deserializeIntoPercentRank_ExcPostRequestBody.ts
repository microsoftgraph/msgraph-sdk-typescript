import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {PercentRank_ExcPostRequestBody} from './percentRank_ExcPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPercentRank_ExcPostRequestBody(percentRank_ExcPostRequestBody: PercentRank_ExcPostRequestBody | undefined = {} as PercentRank_ExcPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "array": n => { percentRank_ExcPostRequestBody.array = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "significance": n => { percentRank_ExcPostRequestBody.significance = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "x": n => { percentRank_ExcPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
