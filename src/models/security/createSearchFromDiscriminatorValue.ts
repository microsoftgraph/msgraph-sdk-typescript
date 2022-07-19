import {EdiscoveryReviewSetQuery, EdiscoverySearch, Search} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchFromDiscriminatorValue(parseNode: ParseNode | undefined) : Search {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.security.ediscoveryReviewSetQuery":
                    return new EdiscoveryReviewSetQuery();
                case "#microsoft.graph.security.ediscoverySearch":
                    return new EdiscoverySearch();
            }
        }
    }
    return new Search();
}
