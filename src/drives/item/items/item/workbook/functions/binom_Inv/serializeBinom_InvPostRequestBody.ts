import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Binom_InvPostRequestBody} from './binom_InvPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBinom_InvPostRequestBody(writer: SerializationWriter, binom_InvPostRequestBody: Binom_InvPostRequestBody | undefined = {} as Binom_InvPostRequestBody) : void {
        writer.writeObjectValue<Json>("alpha", binom_InvPostRequestBody.alpha, serializeJson);
        writer.writeObjectValue<Json>("probabilityS", binom_InvPostRequestBody.probabilityS, serializeJson);
        writer.writeObjectValue<Json>("trials", binom_InvPostRequestBody.trials, serializeJson);
        writer.writeAdditionalData(binom_InvPostRequestBody.additionalData);
}
