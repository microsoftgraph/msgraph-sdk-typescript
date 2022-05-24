import {MarkReadPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMarkReadPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MarkReadPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MarkReadPostRequestBodyImpl();
}
