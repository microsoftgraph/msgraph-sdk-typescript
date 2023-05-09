import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Confidence_NormPostRequestBody} from './confidence_NormPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConfidence_NormPostRequestBody(confidence_NormPostRequestBody: Confidence_NormPostRequestBody | undefined = {} as Confidence_NormPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "alpha": n => { confidence_NormPostRequestBody.alpha = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "size": n => { confidence_NormPostRequestBody.size = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "standardDev": n => { confidence_NormPostRequestBody.standardDev = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
