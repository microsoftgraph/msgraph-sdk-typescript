import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ChiSq_Inv_RTPostRequestBody} from './chiSq_Inv_RTPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChiSq_Inv_RTPostRequestBody(chiSq_Inv_RTPostRequestBody: ChiSq_Inv_RTPostRequestBody | undefined = {} as ChiSq_Inv_RTPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "degFreedom": n => { chiSq_Inv_RTPostRequestBody.degFreedom = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "probability": n => { chiSq_Inv_RTPostRequestBody.probability = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
