import { deserializeIntoAttributeMappingSource } from './deserializeIntoAttributeMappingSource';
import { type AttributeMappingSource } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAttributeMappingSourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttributeMappingSource;
}
