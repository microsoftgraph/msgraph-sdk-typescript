import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {HarMeanPostRequestBody} from './harMeanPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHarMeanPostRequestBody(writer: SerializationWriter, harMeanPostRequestBody: HarMeanPostRequestBody | undefined = {} as HarMeanPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", harMeanPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(harMeanPostRequestBody.additionalData);
}
