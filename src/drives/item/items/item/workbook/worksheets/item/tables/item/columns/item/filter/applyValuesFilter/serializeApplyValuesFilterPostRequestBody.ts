import { type Json } from '../../../../../../../../../../../../../models/json';
import { serializeJson } from '../../../../../../../../../../../../../models/serializeJson';
import { type ApplyValuesFilterPostRequestBody } from './applyValuesFilterPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeApplyValuesFilterPostRequestBody(writer: SerializationWriter, applyValuesFilterPostRequestBody: ApplyValuesFilterPostRequestBody | undefined = {} as ApplyValuesFilterPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", applyValuesFilterPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(applyValuesFilterPostRequestBody.additionalData);
}
