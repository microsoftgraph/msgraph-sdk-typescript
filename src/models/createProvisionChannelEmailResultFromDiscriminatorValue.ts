import {ProvisionChannelEmailResultImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisionChannelEmailResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProvisionChannelEmailResultImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProvisionChannelEmailResultImpl();
}
