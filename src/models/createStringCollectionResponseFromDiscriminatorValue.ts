import {StringCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStringCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : StringCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StringCollectionResponseImpl();
}
