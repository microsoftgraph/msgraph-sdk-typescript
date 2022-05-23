import {CopyToSectionGroupPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyToSectionGroupPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyToSectionGroupPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyToSectionGroupPostRequestBodyImpl();
}
