import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {F_Inv_RTPostRequestBody} from './f_Inv_RTPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeF_Inv_RTPostRequestBody(writer: SerializationWriter, f_Inv_RTPostRequestBody: F_Inv_RTPostRequestBody | undefined = {} as F_Inv_RTPostRequestBody) : void {
        writer.writeObjectValue<Json>("degFreedom1", f_Inv_RTPostRequestBody.degFreedom1, serializeJson);
        writer.writeObjectValue<Json>("degFreedom2", f_Inv_RTPostRequestBody.degFreedom2, serializeJson);
        writer.writeObjectValue<Json>("probability", f_Inv_RTPostRequestBody.probability, serializeJson);
        writer.writeAdditionalData(f_Inv_RTPostRequestBody.additionalData);
}
