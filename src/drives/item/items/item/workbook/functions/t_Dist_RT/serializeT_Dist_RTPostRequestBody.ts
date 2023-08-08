import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {T_Dist_RTPostRequestBody} from './t_Dist_RTPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeT_Dist_RTPostRequestBody(writer: SerializationWriter, t_Dist_RTPostRequestBody: T_Dist_RTPostRequestBody | undefined = {} as T_Dist_RTPostRequestBody) : void {
        writer.writeObjectValue<Json>("degFreedom", t_Dist_RTPostRequestBody.degFreedom, serializeJson);
        writer.writeObjectValue<Json>("x", t_Dist_RTPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(t_Dist_RTPostRequestBody.additionalData);
}
