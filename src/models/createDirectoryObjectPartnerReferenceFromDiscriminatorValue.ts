import { deserializeIntoDirectoryObjectPartnerReference } from './deserializeIntoDirectoryObjectPartnerReference';
import { type DirectoryObjectPartnerReference } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDirectoryObjectPartnerReferenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDirectoryObjectPartnerReference;
}
