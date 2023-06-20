import {ApplyCellColorFilterPostRequestBody} from './applyCellColorFilterPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplyCellColorFilterPostRequestBody(applyCellColorFilterPostRequestBody: ApplyCellColorFilterPostRequestBody | undefined = {} as ApplyCellColorFilterPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("color", applyCellColorFilterPostRequestBody.color);
        writer.writeAdditionalData(applyCellColorFilterPostRequestBody.additionalData);
}
