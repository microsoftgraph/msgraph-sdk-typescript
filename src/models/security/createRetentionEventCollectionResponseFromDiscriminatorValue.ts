import {deserializeIntoRetentionEventCollectionResponse} from './deserializeIntoRetentionEventCollectionResponse';
import {RetentionEventCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRetentionEventCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRetentionEventCollectionResponse;
}
