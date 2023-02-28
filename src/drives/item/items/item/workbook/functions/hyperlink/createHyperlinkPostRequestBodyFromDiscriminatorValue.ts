import {HyperlinkPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHyperlinkPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : HyperlinkPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new HyperlinkPostRequestBody();
}
