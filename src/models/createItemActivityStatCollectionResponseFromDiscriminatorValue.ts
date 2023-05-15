import {deserializeIntoItemActivityStatCollectionResponse} from './deserializeIntoItemActivityStatCollectionResponse';
import {ItemActivityStatCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemActivityStatCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoItemActivityStatCollectionResponse;
}
