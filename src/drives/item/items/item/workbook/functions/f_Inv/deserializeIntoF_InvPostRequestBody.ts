import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type F_InvPostRequestBody } from './f_InvPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoF_InvPostRequestBody(f_InvPostRequestBody: F_InvPostRequestBody | undefined = {} as F_InvPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "degFreedom1": n => { f_InvPostRequestBody.degFreedom1 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "degFreedom2": n => { f_InvPostRequestBody.degFreedom2 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "probability": n => { f_InvPostRequestBody.probability = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
