import { deserializeIntoHyperlinkPostRequestBody } from './deserializeIntoHyperlinkPostRequestBody';
import { type HyperlinkPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createHyperlinkPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHyperlinkPostRequestBody;
}
