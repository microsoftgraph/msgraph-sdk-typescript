import {ItemActivityStatCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemActivityStatCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ItemActivityStatCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ItemActivityStatCollectionResponse();
}
