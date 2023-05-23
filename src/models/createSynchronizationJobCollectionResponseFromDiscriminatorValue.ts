import {deserializeIntoSynchronizationJobCollectionResponse} from './deserializeIntoSynchronizationJobCollectionResponse';
import {SynchronizationJobCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynchronizationJobCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationJobCollectionResponse;
}
