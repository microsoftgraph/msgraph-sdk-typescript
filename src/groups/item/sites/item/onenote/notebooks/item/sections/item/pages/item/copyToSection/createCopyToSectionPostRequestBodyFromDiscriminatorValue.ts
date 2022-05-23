import {CopyToSectionPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyToSectionPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyToSectionPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyToSectionPostRequestBodyImpl();
}
