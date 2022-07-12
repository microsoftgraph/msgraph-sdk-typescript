import {TemporaryAccessPassAuthenticationMethod} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue(parseNode: ParseNode | undefined) : TemporaryAccessPassAuthenticationMethod {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TemporaryAccessPassAuthenticationMethod();
}
