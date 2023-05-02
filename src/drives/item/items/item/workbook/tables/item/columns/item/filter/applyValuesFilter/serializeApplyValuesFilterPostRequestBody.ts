import {Json} from '../../../../../../../../../../../models/json';
import {serializeJson} from '../../../../../../../../../../../models/serializeJson';
import {ApplyValuesFilterPostRequestBody} from './applyValuesFilterPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplyValuesFilterPostRequestBody(writer: SerializationWriter, applyValuesFilterPostRequestBody: ApplyValuesFilterPostRequestBody | undefined = {} as ApplyValuesFilterPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", applyValuesFilterPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(applyValuesFilterPostRequestBody.additionalData);
}
