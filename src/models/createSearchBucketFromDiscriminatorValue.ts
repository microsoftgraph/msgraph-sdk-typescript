import {SearchBucketImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchBucketFromDiscriminatorValue(parseNode: ParseNode | undefined) : SearchBucketImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SearchBucketImpl();
}
