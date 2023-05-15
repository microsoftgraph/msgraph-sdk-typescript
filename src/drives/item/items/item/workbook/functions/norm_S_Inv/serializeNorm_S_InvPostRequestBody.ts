import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Norm_S_InvPostRequestBody} from './norm_S_InvPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNorm_S_InvPostRequestBody(writer: SerializationWriter, norm_S_InvPostRequestBody: Norm_S_InvPostRequestBody | undefined = {} as Norm_S_InvPostRequestBody) : void {
        writer.writeObjectValue<Json>("probability", norm_S_InvPostRequestBody.probability, serializeJson);
        writer.writeAdditionalData(norm_S_InvPostRequestBody.additionalData);
}
