import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ChiSq_Dist_RTPostRequestBody} from './chiSq_Dist_RTPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChiSq_Dist_RTPostRequestBody(writer: SerializationWriter, chiSq_Dist_RTPostRequestBody: ChiSq_Dist_RTPostRequestBody | undefined = {} as ChiSq_Dist_RTPostRequestBody) : void {
        writer.writeObjectValue<Json>("degFreedom", chiSq_Dist_RTPostRequestBody.degFreedom, serializeJson);
        writer.writeObjectValue<Json>("x", chiSq_Dist_RTPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(chiSq_Dist_RTPostRequestBody.additionalData);
}
