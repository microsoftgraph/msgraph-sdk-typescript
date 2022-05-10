import {CallCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CallCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CallCollectionResponseImpl();
}
