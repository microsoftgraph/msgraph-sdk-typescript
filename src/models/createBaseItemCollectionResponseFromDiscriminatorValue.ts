import {BaseItemCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBaseItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BaseItemCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BaseItemCollectionResponseImpl();
}
