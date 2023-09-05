import { deserializeIntoProperty } from './deserializeIntoProperty';
import { type Property } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProperty;
}
