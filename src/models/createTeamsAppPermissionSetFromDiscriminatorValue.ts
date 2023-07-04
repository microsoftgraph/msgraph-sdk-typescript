import {deserializeIntoTeamsAppPermissionSet} from './deserializeIntoTeamsAppPermissionSet';
import {TeamsAppPermissionSet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppPermissionSetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsAppPermissionSet;
}
