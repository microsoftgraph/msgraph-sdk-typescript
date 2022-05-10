import {MarkReadRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMarkReadRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MarkReadRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MarkReadRequestBodyImpl();
}
