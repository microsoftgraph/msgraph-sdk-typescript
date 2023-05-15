import {deserializeIntoSharedWithMeResponse} from './deserializeIntoSharedWithMeResponse';
import {SharedWithMeResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharedWithMeResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharedWithMeResponse;
}
