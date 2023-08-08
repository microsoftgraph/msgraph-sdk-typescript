import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ChiSq_InvPostRequestBody} from './chiSq_InvPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChiSq_InvPostRequestBody(chiSq_InvPostRequestBody: ChiSq_InvPostRequestBody | undefined = {} as ChiSq_InvPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "degFreedom": n => { chiSq_InvPostRequestBody.degFreedom = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "probability": n => { chiSq_InvPostRequestBody.probability = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
