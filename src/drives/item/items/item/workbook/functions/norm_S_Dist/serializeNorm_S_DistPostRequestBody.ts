import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Norm_S_DistPostRequestBody} from './norm_S_DistPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNorm_S_DistPostRequestBody(writer: SerializationWriter, norm_S_DistPostRequestBody: Norm_S_DistPostRequestBody | undefined = {} as Norm_S_DistPostRequestBody) : void {
        writer.writeObjectValue<Json>("cumulative", norm_S_DistPostRequestBody.cumulative, serializeJson);
        writer.writeObjectValue<Json>("z", norm_S_DistPostRequestBody.z, serializeJson);
        writer.writeAdditionalData(norm_S_DistPostRequestBody.additionalData);
}
