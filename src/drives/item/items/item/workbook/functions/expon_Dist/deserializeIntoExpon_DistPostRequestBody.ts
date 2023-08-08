import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Expon_DistPostRequestBody} from './expon_DistPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExpon_DistPostRequestBody(expon_DistPostRequestBody: Expon_DistPostRequestBody | undefined = {} as Expon_DistPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "cumulative": n => { expon_DistPostRequestBody.cumulative = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "lambda": n => { expon_DistPostRequestBody.lambda = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "x": n => { expon_DistPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
