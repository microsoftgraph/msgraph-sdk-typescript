import { deserializeIntoVmMetadata } from './deserializeIntoVmMetadata';
import { type VmMetadata } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createVmMetadataFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoVmMetadata;
}
