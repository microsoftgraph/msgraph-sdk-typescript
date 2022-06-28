import {AssociatedTeamInfoCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssociatedTeamInfoCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssociatedTeamInfoCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssociatedTeamInfoCollectionResponseImpl();
}
