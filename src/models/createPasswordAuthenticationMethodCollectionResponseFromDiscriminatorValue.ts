import {deserializeIntoPasswordAuthenticationMethodCollectionResponse} from './deserializeIntoPasswordAuthenticationMethodCollectionResponse';
import {PasswordAuthenticationMethodCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPasswordAuthenticationMethodCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPasswordAuthenticationMethodCollectionResponse;
}
