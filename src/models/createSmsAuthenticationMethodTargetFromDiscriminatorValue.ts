import {deserializeIntoSmsAuthenticationMethodTarget} from './deserializeIntoSmsAuthenticationMethodTarget';
import {SmsAuthenticationMethodTarget} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSmsAuthenticationMethodTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSmsAuthenticationMethodTarget;
}
