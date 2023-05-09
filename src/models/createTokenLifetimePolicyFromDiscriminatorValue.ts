import {deserializeIntoTokenLifetimePolicy} from './deserializeIntoTokenLifetimePolicy';
import {TokenLifetimePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTokenLifetimePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTokenLifetimePolicy;
}
