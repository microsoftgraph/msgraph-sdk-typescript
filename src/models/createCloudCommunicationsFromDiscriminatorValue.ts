import {deserializeIntoCloudCommunications} from './deserializeIntoCloudCommunications';
import {CloudCommunications} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloudCommunicationsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCloudCommunications;
}
