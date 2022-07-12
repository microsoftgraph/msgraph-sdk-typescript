import {PasswordAuthenticationMethodCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPasswordAuthenticationMethodCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PasswordAuthenticationMethodCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PasswordAuthenticationMethodCollectionResponse();
}
