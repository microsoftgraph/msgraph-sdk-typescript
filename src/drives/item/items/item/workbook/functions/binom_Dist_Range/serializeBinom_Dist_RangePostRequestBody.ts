import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Binom_Dist_RangePostRequestBody} from './binom_Dist_RangePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBinom_Dist_RangePostRequestBody(writer: SerializationWriter, binom_Dist_RangePostRequestBody: Binom_Dist_RangePostRequestBody | undefined = {} as Binom_Dist_RangePostRequestBody) : void {
        writer.writeObjectValue<Json>("numberS", binom_Dist_RangePostRequestBody.numberS, serializeJson);
        writer.writeObjectValue<Json>("numberS2", binom_Dist_RangePostRequestBody.numberS2, serializeJson);
        writer.writeObjectValue<Json>("probabilityS", binom_Dist_RangePostRequestBody.probabilityS, serializeJson);
        writer.writeObjectValue<Json>("trials", binom_Dist_RangePostRequestBody.trials, serializeJson);
        writer.writeAdditionalData(binom_Dist_RangePostRequestBody.additionalData);
}
