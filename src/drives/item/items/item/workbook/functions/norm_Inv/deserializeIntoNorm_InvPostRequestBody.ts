import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Norm_InvPostRequestBody} from './norm_InvPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNorm_InvPostRequestBody(norm_InvPostRequestBody: Norm_InvPostRequestBody | undefined = {} as Norm_InvPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "mean": n => { norm_InvPostRequestBody.mean = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "probability": n => { norm_InvPostRequestBody.probability = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "standardDev": n => { norm_InvPostRequestBody.standardDev = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
