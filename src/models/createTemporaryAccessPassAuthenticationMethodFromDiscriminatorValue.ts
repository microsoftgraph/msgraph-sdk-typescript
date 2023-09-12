import { deserializeIntoTemporaryAccessPassAuthenticationMethod } from './deserializeIntoTemporaryAccessPassAuthenticationMethod';
import { type TemporaryAccessPassAuthenticationMethod } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTemporaryAccessPassAuthenticationMethod;
}
