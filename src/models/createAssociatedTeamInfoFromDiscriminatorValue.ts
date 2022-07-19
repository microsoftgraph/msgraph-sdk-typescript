import {AssociatedTeamInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssociatedTeamInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssociatedTeamInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssociatedTeamInfo();
}
