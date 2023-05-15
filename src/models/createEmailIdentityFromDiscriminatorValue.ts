import {deserializeIntoEmailIdentity} from './deserializeIntoEmailIdentity';
import {EmailIdentity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmailIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEmailIdentity;
}
