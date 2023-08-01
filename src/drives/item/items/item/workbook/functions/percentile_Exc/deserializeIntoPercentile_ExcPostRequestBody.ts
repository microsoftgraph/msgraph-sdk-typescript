import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Percentile_ExcPostRequestBody} from './percentile_ExcPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPercentile_ExcPostRequestBody(percentile_ExcPostRequestBody: Percentile_ExcPostRequestBody | undefined = {} as Percentile_ExcPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "array": n => { percentile_ExcPostRequestBody.array = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "k": n => { percentile_ExcPostRequestBody.k = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
