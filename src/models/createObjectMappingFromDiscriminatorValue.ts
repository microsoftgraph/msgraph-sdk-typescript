import { deserializeIntoObjectMapping } from './deserializeIntoObjectMapping';
import { type ObjectMapping } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createObjectMappingFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoObjectMapping;
}
