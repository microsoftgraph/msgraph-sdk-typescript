import {AssociatedTeamInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssociatedTeamInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssociatedTeamInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssociatedTeamInfoImpl();
}
