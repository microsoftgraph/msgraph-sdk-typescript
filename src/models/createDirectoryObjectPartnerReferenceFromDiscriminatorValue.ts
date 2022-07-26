import {DirectoryObjectPartnerReference} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectoryObjectPartnerReferenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : DirectoryObjectPartnerReference {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DirectoryObjectPartnerReference();
}
