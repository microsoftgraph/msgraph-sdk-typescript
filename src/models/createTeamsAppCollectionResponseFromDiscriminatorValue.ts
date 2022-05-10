import {TeamsAppCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsAppCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsAppCollectionResponseImpl();
}
