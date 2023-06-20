import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {HarMeanPostRequestBody} from './harMeanPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHarMeanPostRequestBody(harMeanPostRequestBody: HarMeanPostRequestBody | undefined = {} as HarMeanPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("values", harMeanPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(harMeanPostRequestBody.additionalData);
}
