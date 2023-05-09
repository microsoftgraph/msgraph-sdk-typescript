import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Percentile_IncPostRequestBody} from './percentile_IncPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPercentile_IncPostRequestBody(percentile_IncPostRequestBody: Percentile_IncPostRequestBody | undefined = {} as Percentile_IncPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "array": n => { percentile_IncPostRequestBody.array = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "k": n => { percentile_IncPostRequestBody.k = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
