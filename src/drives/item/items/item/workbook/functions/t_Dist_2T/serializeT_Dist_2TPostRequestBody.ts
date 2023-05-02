import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {T_Dist_2TPostRequestBody} from './t_Dist_2TPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeT_Dist_2TPostRequestBody(writer: SerializationWriter, t_Dist_2TPostRequestBody: T_Dist_2TPostRequestBody | undefined = {} as T_Dist_2TPostRequestBody) : void {
        writer.writeObjectValue<Json>("degFreedom", t_Dist_2TPostRequestBody.degFreedom, serializeJson);
        writer.writeObjectValue<Json>("x", t_Dist_2TPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(t_Dist_2TPostRequestBody.additionalData);
}
