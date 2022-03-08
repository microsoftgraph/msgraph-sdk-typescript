import {VppToken} from './vppToken';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVppTokenFromDiscriminatorValue(parseNode: ParseNode | undefined) : VppToken {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VppToken();
}
