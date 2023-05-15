import {deserializeIntoDirectoryObjectPartnerReference} from './deserializeIntoDirectoryObjectPartnerReference';
import {DirectoryObjectPartnerReference} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectoryObjectPartnerReferenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDirectoryObjectPartnerReference;
}
