import {EmailIdentity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmailIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : EmailIdentity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EmailIdentity();
}
