import {deserializeIntoSearchResponse} from './deserializeIntoSearchResponse';
import {SearchResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSearchResponse;
}
