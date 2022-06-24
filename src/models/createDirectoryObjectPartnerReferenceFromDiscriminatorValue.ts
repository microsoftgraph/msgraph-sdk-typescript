import {DirectoryObjectPartnerReferenceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectoryObjectPartnerReferenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : DirectoryObjectPartnerReferenceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DirectoryObjectPartnerReferenceImpl();
}
