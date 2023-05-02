import {deserializeIntoPersonCollectionResponse} from './deserializeIntoPersonCollectionResponse';
import {PersonCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPersonCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPersonCollectionResponse;
}
