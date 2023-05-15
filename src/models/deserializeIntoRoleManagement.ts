import {createRbacApplicationFromDiscriminatorValue} from './createRbacApplicationFromDiscriminatorValue';
import {RbacApplication} from './rbacApplication';
import {RoleManagement} from './roleManagement';
import {serializeRbacApplication} from './serializeRbacApplication';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRoleManagement(roleManagement: RoleManagement | undefined = {} as RoleManagement) : Record<string, (node: ParseNode) => void> {
    return {
        "directory": n => { roleManagement.directory = n.getObjectValue<RbacApplication>(createRbacApplicationFromDiscriminatorValue); },
        "entitlementManagement": n => { roleManagement.entitlementManagement = n.getObjectValue<RbacApplication>(createRbacApplicationFromDiscriminatorValue); },
        "@odata.type": n => { roleManagement.odataType = n.getStringValue(); },
    }
}
