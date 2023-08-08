import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ChiSq_Inv_RTPostRequestBody} from './chiSq_Inv_RTPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChiSq_Inv_RTPostRequestBody(writer: SerializationWriter, chiSq_Inv_RTPostRequestBody: ChiSq_Inv_RTPostRequestBody | undefined = {} as ChiSq_Inv_RTPostRequestBody) : void {
        writer.writeObjectValue<Json>("degFreedom", chiSq_Inv_RTPostRequestBody.degFreedom, serializeJson);
        writer.writeObjectValue<Json>("probability", chiSq_Inv_RTPostRequestBody.probability, serializeJson);
        writer.writeAdditionalData(chiSq_Inv_RTPostRequestBody.additionalData);
}
