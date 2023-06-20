import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Expon_DistPostRequestBody} from './expon_DistPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExpon_DistPostRequestBody(expon_DistPostRequestBody: Expon_DistPostRequestBody | undefined = {} as Expon_DistPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("cumulative", expon_DistPostRequestBody.cumulative, serializeJson);
        writer.writeObjectValue<Json>("lambda", expon_DistPostRequestBody.lambda, serializeJson);
        writer.writeObjectValue<Json>("x", expon_DistPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(expon_DistPostRequestBody.additionalData);
}
