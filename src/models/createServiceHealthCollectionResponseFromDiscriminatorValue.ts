import {deserializeIntoServiceHealthCollectionResponse} from './deserializeIntoServiceHealthCollectionResponse';
import {ServiceHealthCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceHealthCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServiceHealthCollectionResponse;
}
