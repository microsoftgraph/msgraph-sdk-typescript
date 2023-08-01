import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Weibull_DistPostRequestBody} from './weibull_DistPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWeibull_DistPostRequestBody(weibull_DistPostRequestBody: Weibull_DistPostRequestBody | undefined = {} as Weibull_DistPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "alpha": n => { weibull_DistPostRequestBody.alpha = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "beta": n => { weibull_DistPostRequestBody.beta = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "cumulative": n => { weibull_DistPostRequestBody.cumulative = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "x": n => { weibull_DistPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
