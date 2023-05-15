import {deserializeIntoPreAuthorizedApplication} from './deserializeIntoPreAuthorizedApplication';
import {PreAuthorizedApplication} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPreAuthorizedApplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPreAuthorizedApplication;
}
