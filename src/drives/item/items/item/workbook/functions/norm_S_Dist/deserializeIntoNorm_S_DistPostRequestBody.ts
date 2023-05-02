import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Norm_S_DistPostRequestBody} from './norm_S_DistPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNorm_S_DistPostRequestBody(norm_S_DistPostRequestBody: Norm_S_DistPostRequestBody | undefined = {} as Norm_S_DistPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "cumulative": n => { norm_S_DistPostRequestBody.cumulative = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "z": n => { norm_S_DistPostRequestBody.z = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
