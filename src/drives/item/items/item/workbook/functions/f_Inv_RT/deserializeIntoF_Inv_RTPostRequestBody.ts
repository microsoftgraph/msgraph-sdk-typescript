import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {F_Inv_RTPostRequestBody} from './f_Inv_RTPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoF_Inv_RTPostRequestBody(f_Inv_RTPostRequestBody: F_Inv_RTPostRequestBody | undefined = {} as F_Inv_RTPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "degFreedom1": n => { f_Inv_RTPostRequestBody.degFreedom1 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "degFreedom2": n => { f_Inv_RTPostRequestBody.degFreedom2 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "probability": n => { f_Inv_RTPostRequestBody.probability = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
