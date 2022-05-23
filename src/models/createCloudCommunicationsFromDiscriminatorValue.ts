import {CloudCommunicationsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloudCommunicationsFromDiscriminatorValue(parseNode: ParseNode | undefined) : CloudCommunicationsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CloudCommunicationsImpl();
}
