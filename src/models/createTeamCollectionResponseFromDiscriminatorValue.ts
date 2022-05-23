import {TeamCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamCollectionResponseImpl();
}
