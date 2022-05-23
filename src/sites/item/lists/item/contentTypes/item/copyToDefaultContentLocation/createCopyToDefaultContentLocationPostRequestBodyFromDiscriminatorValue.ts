import {CopyToDefaultContentLocationPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyToDefaultContentLocationPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyToDefaultContentLocationPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyToDefaultContentLocationPostRequestBodyImpl();
}
