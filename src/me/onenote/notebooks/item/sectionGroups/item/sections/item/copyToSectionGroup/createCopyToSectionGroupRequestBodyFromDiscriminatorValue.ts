import {CopyToSectionGroupRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyToSectionGroupRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyToSectionGroupRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyToSectionGroupRequestBodyImpl();
}
