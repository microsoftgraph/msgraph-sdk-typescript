import { deserializeIntoTeamsAppPermissionSet } from './deserializeIntoTeamsAppPermissionSet';
import { type TeamsAppPermissionSet } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamsAppPermissionSetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsAppPermissionSet;
}
