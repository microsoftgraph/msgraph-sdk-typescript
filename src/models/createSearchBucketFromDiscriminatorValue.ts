import {deserializeIntoSearchBucket} from './deserializeIntoSearchBucket';
import {SearchBucket} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchBucketFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSearchBucket;
}
