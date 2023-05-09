import {deserializeIntoSharepoint} from './deserializeIntoSharepoint';
import {Sharepoint} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharepointFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharepoint;
}
