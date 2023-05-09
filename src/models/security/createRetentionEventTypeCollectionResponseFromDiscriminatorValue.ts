import {deserializeIntoRetentionEventTypeCollectionResponse} from './deserializeIntoRetentionEventTypeCollectionResponse';
import {RetentionEventTypeCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRetentionEventTypeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRetentionEventTypeCollectionResponse;
}
