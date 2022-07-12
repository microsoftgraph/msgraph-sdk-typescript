import {PreviewResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPreviewResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : PreviewResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PreviewResponseMember1();
}
