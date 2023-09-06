import { deserializeIntoExternalItem } from './deserializeIntoExternalItem';
import { type ExternalItem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createExternalItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExternalItem;
}
