import {deserializeIntoVppToken} from './deserializeIntoVppToken';
import {VppToken} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVppTokenFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoVppToken;
}
