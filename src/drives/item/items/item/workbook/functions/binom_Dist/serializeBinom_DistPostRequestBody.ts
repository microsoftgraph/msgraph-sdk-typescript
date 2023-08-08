import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Binom_DistPostRequestBody} from './binom_DistPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBinom_DistPostRequestBody(writer: SerializationWriter, binom_DistPostRequestBody: Binom_DistPostRequestBody | undefined = {} as Binom_DistPostRequestBody) : void {
        writer.writeObjectValue<Json>("cumulative", binom_DistPostRequestBody.cumulative, serializeJson);
        writer.writeObjectValue<Json>("numberS", binom_DistPostRequestBody.numberS, serializeJson);
        writer.writeObjectValue<Json>("probabilityS", binom_DistPostRequestBody.probabilityS, serializeJson);
        writer.writeObjectValue<Json>("trials", binom_DistPostRequestBody.trials, serializeJson);
        writer.writeAdditionalData(binom_DistPostRequestBody.additionalData);
}
