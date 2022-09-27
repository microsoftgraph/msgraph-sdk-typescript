import {PasswordCredentialCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPasswordCredentialCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PasswordCredentialCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PasswordCredentialCollectionResponse();
}
