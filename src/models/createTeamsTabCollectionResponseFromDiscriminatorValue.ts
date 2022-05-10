import {TeamsTabCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsTabCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsTabCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsTabCollectionResponseImpl();
}
