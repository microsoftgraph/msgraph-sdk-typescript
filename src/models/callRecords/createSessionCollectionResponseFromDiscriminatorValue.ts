import {deserializeIntoSessionCollectionResponse} from './deserializeIntoSessionCollectionResponse';
import {SessionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSessionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSessionCollectionResponse;
}
