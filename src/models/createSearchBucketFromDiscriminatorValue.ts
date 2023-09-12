import { deserializeIntoSearchBucket } from './deserializeIntoSearchBucket';
import { type SearchBucket } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSearchBucketFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSearchBucket;
}
