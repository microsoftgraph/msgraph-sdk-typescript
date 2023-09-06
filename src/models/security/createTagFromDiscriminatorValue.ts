import { deserializeIntoEdiscoveryReviewTag } from './deserializeIntoEdiscoveryReviewTag';
import { deserializeIntoTag } from './deserializeIntoTag';
import { type EdiscoveryReviewTag, type Tag } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTagFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.security.ediscoveryReviewTag":
                    return deserializeIntoEdiscoveryReviewTag;
            }
        }
    }
    return deserializeIntoTag;
}
