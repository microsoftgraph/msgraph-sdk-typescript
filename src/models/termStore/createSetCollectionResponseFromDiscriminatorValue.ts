import {SetCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SetCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SetCollectionResponseImpl();
}
