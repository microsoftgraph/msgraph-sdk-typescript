import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Beta_InvPostRequestBody} from './beta_InvPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBeta_InvPostRequestBody(writer: SerializationWriter, beta_InvPostRequestBody: Beta_InvPostRequestBody | undefined = {} as Beta_InvPostRequestBody) : void {
        writer.writeObjectValue<Json>("a", beta_InvPostRequestBody.a, serializeJson);
        writer.writeObjectValue<Json>("alpha", beta_InvPostRequestBody.alpha, serializeJson);
        writer.writeObjectValue<Json>("b", beta_InvPostRequestBody.b, serializeJson);
        writer.writeObjectValue<Json>("beta", beta_InvPostRequestBody.beta, serializeJson);
        writer.writeObjectValue<Json>("probability", beta_InvPostRequestBody.probability, serializeJson);
        writer.writeAdditionalData(beta_InvPostRequestBody.additionalData);
}
