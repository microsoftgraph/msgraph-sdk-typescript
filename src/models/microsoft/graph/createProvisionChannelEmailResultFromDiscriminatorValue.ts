import {ProvisionChannelEmailResult} from './provisionChannelEmailResult';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisionChannelEmailResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProvisionChannelEmailResult {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProvisionChannelEmailResult();
}
