import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {F_Dist_RTPostRequestBody} from './f_Dist_RTPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeF_Dist_RTPostRequestBody(f_Dist_RTPostRequestBody: F_Dist_RTPostRequestBody | undefined = {} as F_Dist_RTPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("degFreedom1", f_Dist_RTPostRequestBody.degFreedom1, serializeJson);
        writer.writeObjectValue<Json>("degFreedom2", f_Dist_RTPostRequestBody.degFreedom2, serializeJson);
        writer.writeObjectValue<Json>("x", f_Dist_RTPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(f_Dist_RTPostRequestBody.additionalData);
}
