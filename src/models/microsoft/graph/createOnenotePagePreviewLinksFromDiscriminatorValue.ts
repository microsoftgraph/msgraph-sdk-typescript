import {OnenotePagePreviewLinks} from './onenotePagePreviewLinks';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenotePagePreviewLinksFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenotePagePreviewLinks {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenotePagePreviewLinks();
}
