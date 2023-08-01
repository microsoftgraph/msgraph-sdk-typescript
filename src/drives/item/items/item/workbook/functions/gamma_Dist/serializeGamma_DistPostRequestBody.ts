import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Gamma_DistPostRequestBody} from './gamma_DistPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGamma_DistPostRequestBody(writer: SerializationWriter, gamma_DistPostRequestBody: Gamma_DistPostRequestBody | undefined = {} as Gamma_DistPostRequestBody) : void {
        writer.writeObjectValue<Json>("alpha", gamma_DistPostRequestBody.alpha, serializeJson);
        writer.writeObjectValue<Json>("beta", gamma_DistPostRequestBody.beta, serializeJson);
        writer.writeObjectValue<Json>("cumulative", gamma_DistPostRequestBody.cumulative, serializeJson);
        writer.writeObjectValue<Json>("x", gamma_DistPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(gamma_DistPostRequestBody.additionalData);
}
