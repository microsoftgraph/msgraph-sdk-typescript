import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type T_DistPostRequestBody } from './t_DistPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeT_DistPostRequestBody(writer: SerializationWriter, t_DistPostRequestBody: T_DistPostRequestBody | undefined = {} as T_DistPostRequestBody) : void {
        writer.writeObjectValue<Json>("cumulative", t_DistPostRequestBody.cumulative, serializeJson);
        writer.writeObjectValue<Json>("degFreedom", t_DistPostRequestBody.degFreedom, serializeJson);
        writer.writeObjectValue<Json>("x", t_DistPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(t_DistPostRequestBody.additionalData);
}
