import type {AppRoleAssignment} from './appRoleAssignment';
import type {AppRoleAssignmentCollectionResponse} from './appRoleAssignmentCollectionResponse';
import {createAppRoleAssignmentFromDiscriminatorValue} from './createAppRoleAssignmentFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAppRoleAssignment} from './serializeAppRoleAssignment';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppRoleAssignmentCollectionResponse(appRoleAssignmentCollectionResponse: AppRoleAssignmentCollectionResponse | undefined = {} as AppRoleAssignmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(appRoleAssignmentCollectionResponse),
        "value": n => { appRoleAssignmentCollectionResponse.value = n.getCollectionOfObjectValues<AppRoleAssignment>(createAppRoleAssignmentFromDiscriminatorValue); },
    }
}
