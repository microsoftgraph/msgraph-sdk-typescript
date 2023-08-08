import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Poisson_DistPostRequestBody} from './poisson_DistPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePoisson_DistPostRequestBody(writer: SerializationWriter, poisson_DistPostRequestBody: Poisson_DistPostRequestBody | undefined = {} as Poisson_DistPostRequestBody) : void {
        writer.writeObjectValue<Json>("cumulative", poisson_DistPostRequestBody.cumulative, serializeJson);
        writer.writeObjectValue<Json>("mean", poisson_DistPostRequestBody.mean, serializeJson);
        writer.writeObjectValue<Json>("x", poisson_DistPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(poisson_DistPostRequestBody.additionalData);
}
