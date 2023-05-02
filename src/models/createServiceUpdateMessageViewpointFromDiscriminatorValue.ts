import {deserializeIntoServiceUpdateMessageViewpoint} from './deserializeIntoServiceUpdateMessageViewpoint';
import {ServiceUpdateMessageViewpoint} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceUpdateMessageViewpointFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServiceUpdateMessageViewpoint;
}
