import { deserializeIntoOnenotePagePreview } from './deserializeIntoOnenotePagePreview';
import { type OnenotePagePreview } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOnenotePagePreviewFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnenotePagePreview;
}
