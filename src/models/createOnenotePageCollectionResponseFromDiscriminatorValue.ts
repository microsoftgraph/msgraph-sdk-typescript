import {OnenotePageCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenotePageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenotePageCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenotePageCollectionResponseImpl();
}
