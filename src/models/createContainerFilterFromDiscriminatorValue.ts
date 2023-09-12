import { deserializeIntoContainerFilter } from './deserializeIntoContainerFilter';
import { type ContainerFilter } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createContainerFilterFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContainerFilter;
}
