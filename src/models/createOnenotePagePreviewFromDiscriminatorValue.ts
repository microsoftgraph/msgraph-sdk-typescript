import {OnenotePagePreviewImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenotePagePreviewFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenotePagePreviewImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenotePagePreviewImpl();
}
