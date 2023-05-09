import {deserializeIntoSecurity} from './deserializeIntoSecurity';
import {Security} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecurityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSecurity;
}
