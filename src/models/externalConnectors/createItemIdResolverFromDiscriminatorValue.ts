import { deserializeIntoItemIdResolver } from './deserializeIntoItemIdResolver';
import { type ItemIdResolver } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createItemIdResolverFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoItemIdResolver;
}
