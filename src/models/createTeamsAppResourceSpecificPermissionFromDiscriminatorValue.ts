import {deserializeIntoTeamsAppResourceSpecificPermission} from './deserializeIntoTeamsAppResourceSpecificPermission';
import {TeamsAppResourceSpecificPermission} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppResourceSpecificPermissionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsAppResourceSpecificPermission;
}
