import {TeamsAsyncOperation} from './teamsAsyncOperation';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAsyncOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsAsyncOperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsAsyncOperation();
}
