import type {ApplyFontColorFilterPostRequestBody} from './applyFontColorFilterPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplyFontColorFilterPostRequestBody(writer: SerializationWriter, applyFontColorFilterPostRequestBody: ApplyFontColorFilterPostRequestBody | undefined = {} as ApplyFontColorFilterPostRequestBody) : void {
        writer.writeStringValue("color", applyFontColorFilterPostRequestBody.color);
        writer.writeAdditionalData(applyFontColorFilterPostRequestBody.additionalData);
}
