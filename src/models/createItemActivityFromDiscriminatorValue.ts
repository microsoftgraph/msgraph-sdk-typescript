import { deserializeIntoItemActivity } from './deserializeIntoItemActivity';
import { type ItemActivity } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createItemActivityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoItemActivity;
}
