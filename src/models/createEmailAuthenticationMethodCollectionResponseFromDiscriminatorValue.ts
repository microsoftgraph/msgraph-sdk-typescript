import {EmailAuthenticationMethodCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmailAuthenticationMethodCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EmailAuthenticationMethodCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EmailAuthenticationMethodCollectionResponse();
}
