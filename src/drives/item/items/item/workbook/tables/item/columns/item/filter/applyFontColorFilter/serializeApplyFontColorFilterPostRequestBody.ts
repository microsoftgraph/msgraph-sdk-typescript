import {ApplyFontColorFilterPostRequestBody} from './applyFontColorFilterPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplyFontColorFilterPostRequestBody(applyFontColorFilterPostRequestBody: ApplyFontColorFilterPostRequestBody | undefined = {} as ApplyFontColorFilterPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("color", applyFontColorFilterPostRequestBody.color);
        writer.writeAdditionalData(applyFontColorFilterPostRequestBody.additionalData);
}
