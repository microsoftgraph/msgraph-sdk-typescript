import {SearchBucketCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchBucketCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SearchBucketCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SearchBucketCollectionResponse();
}
