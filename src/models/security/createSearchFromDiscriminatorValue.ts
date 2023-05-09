import {deserializeIntoEdiscoveryReviewSetQuery} from './deserializeIntoEdiscoveryReviewSetQuery';
import {deserializeIntoEdiscoverySearch} from './deserializeIntoEdiscoverySearch';
import {deserializeIntoSearch} from './deserializeIntoSearch';
import {EdiscoveryReviewSetQuery, EdiscoverySearch, Search} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.security.ediscoveryReviewSetQuery":
                    return deserializeIntoEdiscoveryReviewSetQuery;
                case "#microsoft.graph.security.ediscoverySearch":
                    return deserializeIntoEdiscoverySearch;
            }
        }
    }
    return deserializeIntoSearch;
}
