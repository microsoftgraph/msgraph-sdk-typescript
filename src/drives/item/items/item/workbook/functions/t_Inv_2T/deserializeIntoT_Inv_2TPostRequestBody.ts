import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {T_Inv_2TPostRequestBody} from './t_Inv_2TPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoT_Inv_2TPostRequestBody(t_Inv_2TPostRequestBody: T_Inv_2TPostRequestBody | undefined = {} as T_Inv_2TPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "degFreedom": n => { t_Inv_2TPostRequestBody.degFreedom = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "probability": n => { t_Inv_2TPostRequestBody.probability = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
