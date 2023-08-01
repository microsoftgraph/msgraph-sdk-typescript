import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {F_Dist_RTPostRequestBody} from './f_Dist_RTPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoF_Dist_RTPostRequestBody(f_Dist_RTPostRequestBody: F_Dist_RTPostRequestBody | undefined = {} as F_Dist_RTPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "degFreedom1": n => { f_Dist_RTPostRequestBody.degFreedom1 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "degFreedom2": n => { f_Dist_RTPostRequestBody.degFreedom2 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "x": n => { f_Dist_RTPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
