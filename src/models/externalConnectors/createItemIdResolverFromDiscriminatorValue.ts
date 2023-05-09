import {deserializeIntoItemIdResolver} from './deserializeIntoItemIdResolver';
import {ItemIdResolver} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemIdResolverFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoItemIdResolver;
}
