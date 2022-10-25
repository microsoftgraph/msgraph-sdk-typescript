import {DirectoryObjectPartnerReferenceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectoryObjectPartnerReferenceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DirectoryObjectPartnerReferenceCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DirectoryObjectPartnerReferenceCollectionResponse();
}
