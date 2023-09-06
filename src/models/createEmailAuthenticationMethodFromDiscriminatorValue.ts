import { deserializeIntoEmailAuthenticationMethod } from './deserializeIntoEmailAuthenticationMethod';
import { type EmailAuthenticationMethod } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEmailAuthenticationMethodFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEmailAuthenticationMethod;
}
