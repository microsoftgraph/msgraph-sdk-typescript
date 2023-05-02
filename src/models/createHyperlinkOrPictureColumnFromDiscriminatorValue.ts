import {deserializeIntoHyperlinkOrPictureColumn} from './deserializeIntoHyperlinkOrPictureColumn';
import {HyperlinkOrPictureColumn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHyperlinkOrPictureColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHyperlinkOrPictureColumn;
}
