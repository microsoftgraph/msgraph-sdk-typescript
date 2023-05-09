import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {T_Inv_2TPostRequestBody} from './t_Inv_2TPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeT_Inv_2TPostRequestBody(writer: SerializationWriter, t_Inv_2TPostRequestBody: T_Inv_2TPostRequestBody | undefined = {} as T_Inv_2TPostRequestBody) : void {
        writer.writeObjectValue<Json>("degFreedom", t_Inv_2TPostRequestBody.degFreedom, serializeJson);
        writer.writeObjectValue<Json>("probability", t_Inv_2TPostRequestBody.probability, serializeJson);
        writer.writeAdditionalData(t_Inv_2TPostRequestBody.additionalData);
}
