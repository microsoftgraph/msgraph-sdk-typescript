import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ChiSq_InvPostRequestBody} from './chiSq_InvPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChiSq_InvPostRequestBody(writer: SerializationWriter, chiSq_InvPostRequestBody: ChiSq_InvPostRequestBody | undefined = {} as ChiSq_InvPostRequestBody) : void {
        writer.writeObjectValue<Json>("degFreedom", chiSq_InvPostRequestBody.degFreedom, serializeJson);
        writer.writeObjectValue<Json>("probability", chiSq_InvPostRequestBody.probability, serializeJson);
        writer.writeAdditionalData(chiSq_InvPostRequestBody.additionalData);
}
