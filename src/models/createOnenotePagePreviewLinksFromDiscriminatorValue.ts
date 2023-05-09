import {deserializeIntoOnenotePagePreviewLinks} from './deserializeIntoOnenotePagePreviewLinks';
import {OnenotePagePreviewLinks} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenotePagePreviewLinksFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnenotePagePreviewLinks;
}
