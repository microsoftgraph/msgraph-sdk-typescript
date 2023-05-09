import {deserializeIntoHyperlinkPostRequestBody} from './deserializeIntoHyperlinkPostRequestBody';
import {HyperlinkPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHyperlinkPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHyperlinkPostRequestBody;
}
