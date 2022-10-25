import {EmailAuthenticationMethodConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmailAuthenticationMethodConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EmailAuthenticationMethodConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EmailAuthenticationMethodConfigurationCollectionResponse();
}
