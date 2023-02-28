import {PasswordCredentialConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPasswordCredentialConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PasswordCredentialConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PasswordCredentialConfigurationCollectionResponse();
}
