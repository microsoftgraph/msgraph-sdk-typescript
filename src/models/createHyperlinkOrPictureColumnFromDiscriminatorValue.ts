import { deserializeIntoHyperlinkOrPictureColumn } from './deserializeIntoHyperlinkOrPictureColumn';
import { type HyperlinkOrPictureColumn } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createHyperlinkOrPictureColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHyperlinkOrPictureColumn;
}
