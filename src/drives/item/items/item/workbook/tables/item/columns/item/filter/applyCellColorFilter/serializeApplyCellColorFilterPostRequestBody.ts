import { type ApplyCellColorFilterPostRequestBody } from './applyCellColorFilterPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeApplyCellColorFilterPostRequestBody(writer: SerializationWriter, applyCellColorFilterPostRequestBody: ApplyCellColorFilterPostRequestBody | undefined = {} as ApplyCellColorFilterPostRequestBody) : void {
        writer.writeStringValue("color", applyCellColorFilterPostRequestBody.color);
        writer.writeAdditionalData(applyCellColorFilterPostRequestBody.additionalData);
}
