import { deserializeIntoEmailAddress } from './deserializeIntoEmailAddress';
import { type EmailAddress } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEmailAddressFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEmailAddress;
}
