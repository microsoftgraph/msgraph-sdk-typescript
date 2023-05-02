import {AppRoleAssignment} from './appRoleAssignment';
import {AppRoleAssignmentCollectionResponse} from './appRoleAssignmentCollectionResponse';
import {serializeAppRoleAssignment} from './serializeAppRoleAssignment';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppRoleAssignmentCollectionResponse(writer: SerializationWriter, appRoleAssignmentCollectionResponse: AppRoleAssignmentCollectionResponse | undefined = {} as AppRoleAssignmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, appRoleAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<AppRoleAssignment>("value", appRoleAssignmentCollectionResponse.value, serializeAppRoleAssignment);
}
