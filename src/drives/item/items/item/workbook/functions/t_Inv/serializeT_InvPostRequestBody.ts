import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {T_InvPostRequestBody} from './t_InvPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeT_InvPostRequestBody(writer: SerializationWriter, t_InvPostRequestBody: T_InvPostRequestBody | undefined = {} as T_InvPostRequestBody) : void {
        writer.writeObjectValue<Json>("degFreedom", t_InvPostRequestBody.degFreedom, serializeJson);
        writer.writeObjectValue<Json>("probability", t_InvPostRequestBody.probability, serializeJson);
        writer.writeAdditionalData(t_InvPostRequestBody.additionalData);
}
