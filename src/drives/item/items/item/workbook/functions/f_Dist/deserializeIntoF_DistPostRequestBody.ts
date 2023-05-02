import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {F_DistPostRequestBody} from './f_DistPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoF_DistPostRequestBody(f_DistPostRequestBody: F_DistPostRequestBody | undefined = {} as F_DistPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "cumulative": n => { f_DistPostRequestBody.cumulative = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "degFreedom1": n => { f_DistPostRequestBody.degFreedom1 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "degFreedom2": n => { f_DistPostRequestBody.degFreedom2 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "x": n => { f_DistPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
