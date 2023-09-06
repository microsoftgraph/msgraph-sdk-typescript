import { deserializeIntoTeamsAppAuthorization } from './deserializeIntoTeamsAppAuthorization';
import { type TeamsAppAuthorization } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamsAppAuthorizationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsAppAuthorization;
}
