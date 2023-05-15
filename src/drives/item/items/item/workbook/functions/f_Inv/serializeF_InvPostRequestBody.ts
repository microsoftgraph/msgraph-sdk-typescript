import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {F_InvPostRequestBody} from './f_InvPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeF_InvPostRequestBody(writer: SerializationWriter, f_InvPostRequestBody: F_InvPostRequestBody | undefined = {} as F_InvPostRequestBody) : void {
        writer.writeObjectValue<Json>("degFreedom1", f_InvPostRequestBody.degFreedom1, serializeJson);
        writer.writeObjectValue<Json>("degFreedom2", f_InvPostRequestBody.degFreedom2, serializeJson);
        writer.writeObjectValue<Json>("probability", f_InvPostRequestBody.probability, serializeJson);
        writer.writeAdditionalData(f_InvPostRequestBody.additionalData);
}
