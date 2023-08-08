import type {ApplyFontColorFilterPostRequestBody} from './applyFontColorFilterPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplyFontColorFilterPostRequestBody(applyFontColorFilterPostRequestBody: ApplyFontColorFilterPostRequestBody | undefined = {} as ApplyFontColorFilterPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "color": n => { applyFontColorFilterPostRequestBody.color = n.getStringValue(); },
    }
}
