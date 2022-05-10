import {PreviewRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPreviewRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : PreviewRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PreviewRequestBodyImpl();
}
