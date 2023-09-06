import { deserializeIntoTeamsAppResourceSpecificPermission } from './deserializeIntoTeamsAppResourceSpecificPermission';
import { type TeamsAppResourceSpecificPermission } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamsAppResourceSpecificPermissionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsAppResourceSpecificPermission;
}
