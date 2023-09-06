import { deserializeIntoPasswordAuthenticationMethodCollectionResponse } from './deserializeIntoPasswordAuthenticationMethodCollectionResponse';
import { type PasswordAuthenticationMethodCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPasswordAuthenticationMethodCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPasswordAuthenticationMethodCollectionResponse;
}
