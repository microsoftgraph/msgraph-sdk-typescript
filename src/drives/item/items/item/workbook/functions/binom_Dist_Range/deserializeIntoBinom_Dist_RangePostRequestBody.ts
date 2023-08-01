import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Binom_Dist_RangePostRequestBody} from './binom_Dist_RangePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBinom_Dist_RangePostRequestBody(binom_Dist_RangePostRequestBody: Binom_Dist_RangePostRequestBody | undefined = {} as Binom_Dist_RangePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "numberS": n => { binom_Dist_RangePostRequestBody.numberS = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "numberS2": n => { binom_Dist_RangePostRequestBody.numberS2 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "probabilityS": n => { binom_Dist_RangePostRequestBody.probabilityS = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "trials": n => { binom_Dist_RangePostRequestBody.trials = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
