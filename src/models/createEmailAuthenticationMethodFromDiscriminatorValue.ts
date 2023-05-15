import {deserializeIntoEmailAuthenticationMethod} from './deserializeIntoEmailAuthenticationMethod';
import {EmailAuthenticationMethod} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmailAuthenticationMethodFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEmailAuthenticationMethod;
}
