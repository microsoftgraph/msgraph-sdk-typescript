import {Json} from '../../../../../../../../../../../../../models/json';
import {serializeJson} from '../../../../../../../../../../../../../models/serializeJson';
import {ApplyValuesFilterPostRequestBody} from './applyValuesFilterPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplyValuesFilterPostRequestBody(applyValuesFilterPostRequestBody: ApplyValuesFilterPostRequestBody | undefined = {} as ApplyValuesFilterPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("values", applyValuesFilterPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(applyValuesFilterPostRequestBody.additionalData);
}
