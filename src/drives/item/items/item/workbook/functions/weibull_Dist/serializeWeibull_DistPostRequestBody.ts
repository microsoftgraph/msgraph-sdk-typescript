import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Weibull_DistPostRequestBody} from './weibull_DistPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWeibull_DistPostRequestBody(writer: SerializationWriter, weibull_DistPostRequestBody: Weibull_DistPostRequestBody | undefined = {} as Weibull_DistPostRequestBody) : void {
        writer.writeObjectValue<Json>("alpha", weibull_DistPostRequestBody.alpha, serializeJson);
        writer.writeObjectValue<Json>("beta", weibull_DistPostRequestBody.beta, serializeJson);
        writer.writeObjectValue<Json>("cumulative", weibull_DistPostRequestBody.cumulative, serializeJson);
        writer.writeObjectValue<Json>("x", weibull_DistPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(weibull_DistPostRequestBody.additionalData);
}
