import {deserializeIntoItemIdResolver} from './deserializeIntoItemIdResolver';
import {deserializeIntoUrlToItemResolverBase} from './deserializeIntoUrlToItemResolverBase';
import {ItemIdResolver, UrlToItemResolverBase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUrlToItemResolverBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.externalConnectors.itemIdResolver":
                    return deserializeIntoItemIdResolver;
            }
        }
    }
    return deserializeIntoUrlToItemResolverBase;
}
