import {HyperlinkOrPictureColumnImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHyperlinkOrPictureColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) : HyperlinkOrPictureColumnImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new HyperlinkOrPictureColumnImpl();
}
