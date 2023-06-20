import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ChiSq_DistPostRequestBody} from './chiSq_DistPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChiSq_DistPostRequestBody(chiSq_DistPostRequestBody: ChiSq_DistPostRequestBody | undefined = {} as ChiSq_DistPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("cumulative", chiSq_DistPostRequestBody.cumulative, serializeJson);
        writer.writeObjectValue<Json>("degFreedom", chiSq_DistPostRequestBody.degFreedom, serializeJson);
        writer.writeObjectValue<Json>("x", chiSq_DistPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(chiSq_DistPostRequestBody.additionalData);
}
