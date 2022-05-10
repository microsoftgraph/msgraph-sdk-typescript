import {CopyToDefaultContentLocationRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyToDefaultContentLocationRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyToDefaultContentLocationRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyToDefaultContentLocationRequestBodyImpl();
}
