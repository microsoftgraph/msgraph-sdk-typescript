import { deserializeIntoExternalGroup } from './deserializeIntoExternalGroup';
import { type ExternalGroup } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createExternalGroupFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExternalGroup;
}
