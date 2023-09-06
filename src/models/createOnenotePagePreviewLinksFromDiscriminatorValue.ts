import { deserializeIntoOnenotePagePreviewLinks } from './deserializeIntoOnenotePagePreviewLinks';
import { type OnenotePagePreviewLinks } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOnenotePagePreviewLinksFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnenotePagePreviewLinks;
}
