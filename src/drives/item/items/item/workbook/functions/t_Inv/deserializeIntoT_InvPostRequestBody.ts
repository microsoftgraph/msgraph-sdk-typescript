import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {T_InvPostRequestBody} from './t_InvPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoT_InvPostRequestBody(t_InvPostRequestBody: T_InvPostRequestBody | undefined = {} as T_InvPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "degFreedom": n => { t_InvPostRequestBody.degFreedom = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "probability": n => { t_InvPostRequestBody.probability = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
