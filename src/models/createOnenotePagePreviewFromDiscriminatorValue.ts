import {deserializeIntoOnenotePagePreview} from './deserializeIntoOnenotePagePreview';
import {OnenotePagePreview} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenotePagePreviewFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnenotePagePreview;
}
