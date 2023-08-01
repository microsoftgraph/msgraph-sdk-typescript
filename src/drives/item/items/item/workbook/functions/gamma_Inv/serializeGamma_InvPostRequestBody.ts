import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Gamma_InvPostRequestBody} from './gamma_InvPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGamma_InvPostRequestBody(writer: SerializationWriter, gamma_InvPostRequestBody: Gamma_InvPostRequestBody | undefined = {} as Gamma_InvPostRequestBody) : void {
        writer.writeObjectValue<Json>("alpha", gamma_InvPostRequestBody.alpha, serializeJson);
        writer.writeObjectValue<Json>("beta", gamma_InvPostRequestBody.beta, serializeJson);
        writer.writeObjectValue<Json>("probability", gamma_InvPostRequestBody.probability, serializeJson);
        writer.writeAdditionalData(gamma_InvPostRequestBody.additionalData);
}
