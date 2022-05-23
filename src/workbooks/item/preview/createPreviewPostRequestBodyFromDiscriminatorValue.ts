import {PreviewPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPreviewPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : PreviewPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PreviewPostRequestBodyImpl();
}
