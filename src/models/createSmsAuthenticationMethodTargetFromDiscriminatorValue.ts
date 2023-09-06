import { deserializeIntoSmsAuthenticationMethodTarget } from './deserializeIntoSmsAuthenticationMethodTarget';
import { type SmsAuthenticationMethodTarget } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSmsAuthenticationMethodTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSmsAuthenticationMethodTarget;
}
