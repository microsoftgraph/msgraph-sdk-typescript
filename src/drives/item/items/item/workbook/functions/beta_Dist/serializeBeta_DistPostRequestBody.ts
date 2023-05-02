import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Beta_DistPostRequestBody} from './beta_DistPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBeta_DistPostRequestBody(writer: SerializationWriter, beta_DistPostRequestBody: Beta_DistPostRequestBody | undefined = {} as Beta_DistPostRequestBody) : void {
        writer.writeObjectValue<Json>("a", beta_DistPostRequestBody.a, serializeJson);
        writer.writeObjectValue<Json>("alpha", beta_DistPostRequestBody.alpha, serializeJson);
        writer.writeObjectValue<Json>("b", beta_DistPostRequestBody.b, serializeJson);
        writer.writeObjectValue<Json>("beta", beta_DistPostRequestBody.beta, serializeJson);
        writer.writeObjectValue<Json>("cumulative", beta_DistPostRequestBody.cumulative, serializeJson);
        writer.writeObjectValue<Json>("x", beta_DistPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(beta_DistPostRequestBody.additionalData);
}
