import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {Identity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentity;
}
