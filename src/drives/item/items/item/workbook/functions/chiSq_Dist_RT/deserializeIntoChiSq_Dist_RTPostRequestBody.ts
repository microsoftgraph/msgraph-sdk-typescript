import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ChiSq_Dist_RTPostRequestBody} from './chiSq_Dist_RTPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChiSq_Dist_RTPostRequestBody(chiSq_Dist_RTPostRequestBody: ChiSq_Dist_RTPostRequestBody | undefined = {} as ChiSq_Dist_RTPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "degFreedom": n => { chiSq_Dist_RTPostRequestBody.degFreedom = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "x": n => { chiSq_Dist_RTPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
