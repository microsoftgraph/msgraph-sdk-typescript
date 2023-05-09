import {deserializeIntoProvisionChannelEmailResult} from './deserializeIntoProvisionChannelEmailResult';
import {ProvisionChannelEmailResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisionChannelEmailResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProvisionChannelEmailResult;
}
