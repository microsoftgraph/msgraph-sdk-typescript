import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {T_Dist_RTPostRequestBody} from './t_Dist_RTPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoT_Dist_RTPostRequestBody(t_Dist_RTPostRequestBody: T_Dist_RTPostRequestBody | undefined = {} as T_Dist_RTPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "degFreedom": n => { t_Dist_RTPostRequestBody.degFreedom = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "x": n => { t_Dist_RTPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
