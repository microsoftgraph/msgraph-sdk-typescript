import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {F_DistPostRequestBody} from './f_DistPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeF_DistPostRequestBody(writer: SerializationWriter, f_DistPostRequestBody: F_DistPostRequestBody | undefined = {} as F_DistPostRequestBody) : void {
        writer.writeObjectValue<Json>("cumulative", f_DistPostRequestBody.cumulative, serializeJson);
        writer.writeObjectValue<Json>("degFreedom1", f_DistPostRequestBody.degFreedom1, serializeJson);
        writer.writeObjectValue<Json>("degFreedom2", f_DistPostRequestBody.degFreedom2, serializeJson);
        writer.writeObjectValue<Json>("x", f_DistPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(f_DistPostRequestBody.additionalData);
}
