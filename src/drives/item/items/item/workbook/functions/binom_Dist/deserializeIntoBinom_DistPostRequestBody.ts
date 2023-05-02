import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Binom_DistPostRequestBody} from './binom_DistPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBinom_DistPostRequestBody(binom_DistPostRequestBody: Binom_DistPostRequestBody | undefined = {} as Binom_DistPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "cumulative": n => { binom_DistPostRequestBody.cumulative = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "numberS": n => { binom_DistPostRequestBody.numberS = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "probabilityS": n => { binom_DistPostRequestBody.probabilityS = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "trials": n => { binom_DistPostRequestBody.trials = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
