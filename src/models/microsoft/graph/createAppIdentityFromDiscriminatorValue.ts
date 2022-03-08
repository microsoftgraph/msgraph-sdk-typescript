import {AppIdentity} from './appIdentity';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppIdentity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppIdentity();
}
