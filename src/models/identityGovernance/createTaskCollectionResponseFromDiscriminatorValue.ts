import {deserializeIntoTaskCollectionResponse} from './deserializeIntoTaskCollectionResponse';
import {TaskCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTaskCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTaskCollectionResponse;
}
