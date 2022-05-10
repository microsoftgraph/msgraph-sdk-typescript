import {MarkReadResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMarkReadResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MarkReadResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MarkReadResponseImpl();
}
