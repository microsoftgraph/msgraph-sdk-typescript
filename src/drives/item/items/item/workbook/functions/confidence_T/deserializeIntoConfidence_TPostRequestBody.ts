import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Confidence_TPostRequestBody} from './confidence_TPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConfidence_TPostRequestBody(confidence_TPostRequestBody: Confidence_TPostRequestBody | undefined = {} as Confidence_TPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "alpha": n => { confidence_TPostRequestBody.alpha = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "size": n => { confidence_TPostRequestBody.size = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "standardDev": n => { confidence_TPostRequestBody.standardDev = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
