import {deserializeIntoTeamsAppAuthorization} from './deserializeIntoTeamsAppAuthorization';
import {TeamsAppAuthorization} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppAuthorizationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsAppAuthorization;
}
