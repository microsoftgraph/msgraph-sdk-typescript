import {DelegatedAdminAccessContainer} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDelegatedAdminAccessContainerFromDiscriminatorValue(parseNode: ParseNode | undefined) : DelegatedAdminAccessContainer {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DelegatedAdminAccessContainer();
}
