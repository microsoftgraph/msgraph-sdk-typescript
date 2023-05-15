import {deserializeIntoTimeOffRequest} from './deserializeIntoTimeOffRequest';
import {TimeOffRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeOffRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTimeOffRequest;
}
