import {SoftwareOathAuthenticationMethod} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSoftwareOathAuthenticationMethodFromDiscriminatorValue(parseNode: ParseNode | undefined) : SoftwareOathAuthenticationMethod {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SoftwareOathAuthenticationMethod();
}
