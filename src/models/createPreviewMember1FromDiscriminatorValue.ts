import {PreviewMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPreviewMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : PreviewMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PreviewMember1();
}
