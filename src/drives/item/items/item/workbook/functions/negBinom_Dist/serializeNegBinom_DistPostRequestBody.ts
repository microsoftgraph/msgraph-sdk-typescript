import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {NegBinom_DistPostRequestBody} from './negBinom_DistPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNegBinom_DistPostRequestBody(writer: SerializationWriter, negBinom_DistPostRequestBody: NegBinom_DistPostRequestBody | undefined = {} as NegBinom_DistPostRequestBody) : void {
        writer.writeObjectValue<Json>("cumulative", negBinom_DistPostRequestBody.cumulative, serializeJson);
        writer.writeObjectValue<Json>("numberF", negBinom_DistPostRequestBody.numberF, serializeJson);
        writer.writeObjectValue<Json>("numberS", negBinom_DistPostRequestBody.numberS, serializeJson);
        writer.writeObjectValue<Json>("probabilityS", negBinom_DistPostRequestBody.probabilityS, serializeJson);
        writer.writeAdditionalData(negBinom_DistPostRequestBody.additionalData);
}
