import {TermCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TermCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TermCollectionResponseImpl();
}
