import {CopyPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyPostRequestBodyImpl();
}
