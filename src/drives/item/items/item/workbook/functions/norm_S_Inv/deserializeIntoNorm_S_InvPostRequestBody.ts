import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Norm_S_InvPostRequestBody} from './norm_S_InvPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNorm_S_InvPostRequestBody(norm_S_InvPostRequestBody: Norm_S_InvPostRequestBody | undefined = {} as Norm_S_InvPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "probability": n => { norm_S_InvPostRequestBody.probability = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
