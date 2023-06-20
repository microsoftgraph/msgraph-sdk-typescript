import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ChiSq_InvPostRequestBody} from './chiSq_InvPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChiSq_InvPostRequestBody(chiSq_InvPostRequestBody: ChiSq_InvPostRequestBody | undefined = {} as ChiSq_InvPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("degFreedom", chiSq_InvPostRequestBody.degFreedom, serializeJson);
        writer.writeObjectValue<Json>("probability", chiSq_InvPostRequestBody.probability, serializeJson);
        writer.writeAdditionalData(chiSq_InvPostRequestBody.additionalData);
}
