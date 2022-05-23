import {OnenotePagePreviewLinksImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenotePagePreviewLinksFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenotePagePreviewLinksImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenotePagePreviewLinksImpl();
}
