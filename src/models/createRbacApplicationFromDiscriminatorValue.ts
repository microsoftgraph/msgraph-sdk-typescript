import {deserializeIntoRbacApplication} from './deserializeIntoRbacApplication';
import {RbacApplication} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRbacApplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRbacApplication;
}
