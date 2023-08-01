import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {T_Dist_2TPostRequestBody} from './t_Dist_2TPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoT_Dist_2TPostRequestBody(t_Dist_2TPostRequestBody: T_Dist_2TPostRequestBody | undefined = {} as T_Dist_2TPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "degFreedom": n => { t_Dist_2TPostRequestBody.degFreedom = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "x": n => { t_Dist_2TPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
