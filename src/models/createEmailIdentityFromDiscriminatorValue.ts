import { deserializeIntoEmailIdentity } from './deserializeIntoEmailIdentity';
import { type EmailIdentity } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEmailIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEmailIdentity;
}
