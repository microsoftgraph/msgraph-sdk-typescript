import {AppRoleAssignment} from './appRoleAssignment';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function deserializeIntoAppRoleAssignment(appRoleAssignment: AppRoleAssignment | undefined = {} as AppRoleAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(appRoleAssignment),
        "appRoleId": n => { appRoleAssignment.appRoleId = n.getGuidValue(); },
        "createdDateTime": n => { appRoleAssignment.createdDateTime = n.getDateValue(); },
        "principalDisplayName": n => { appRoleAssignment.principalDisplayName = n.getStringValue(); },
        "principalId": n => { appRoleAssignment.principalId = n.getGuidValue(); },
        "principalType": n => { appRoleAssignment.principalType = n.getStringValue(); },
        "resourceDisplayName": n => { appRoleAssignment.resourceDisplayName = n.getStringValue(); },
        "resourceId": n => { appRoleAssignment.resourceId = n.getGuidValue(); },
    }
}
