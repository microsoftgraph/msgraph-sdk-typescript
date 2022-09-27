import {ItemActivityCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemActivityCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ItemActivityCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ItemActivityCollectionResponse();
}
