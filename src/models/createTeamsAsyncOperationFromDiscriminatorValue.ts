import {TeamsAsyncOperationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAsyncOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsAsyncOperationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsAsyncOperationImpl();
}
