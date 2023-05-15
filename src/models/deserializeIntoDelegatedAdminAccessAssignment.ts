import {createDelegatedAdminAccessContainerFromDiscriminatorValue} from './createDelegatedAdminAccessContainerFromDiscriminatorValue';
import {createDelegatedAdminAccessDetailsFromDiscriminatorValue} from './createDelegatedAdminAccessDetailsFromDiscriminatorValue';
import {DelegatedAdminAccessAssignment} from './delegatedAdminAccessAssignment';
import {DelegatedAdminAccessAssignmentStatus} from './delegatedAdminAccessAssignmentStatus';
import {DelegatedAdminAccessContainer} from './delegatedAdminAccessContainer';
import {DelegatedAdminAccessDetails} from './delegatedAdminAccessDetails';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeDelegatedAdminAccessContainer} from './serializeDelegatedAdminAccessContainer';
import {serializeDelegatedAdminAccessDetails} from './serializeDelegatedAdminAccessDetails';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDelegatedAdminAccessAssignment(delegatedAdminAccessAssignment: DelegatedAdminAccessAssignment | undefined = {} as DelegatedAdminAccessAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(delegatedAdminAccessAssignment),
        "accessContainer": n => { delegatedAdminAccessAssignment.accessContainer = n.getObjectValue<DelegatedAdminAccessContainer>(createDelegatedAdminAccessContainerFromDiscriminatorValue); },
        "accessDetails": n => { delegatedAdminAccessAssignment.accessDetails = n.getObjectValue<DelegatedAdminAccessDetails>(createDelegatedAdminAccessDetailsFromDiscriminatorValue); },
        "createdDateTime": n => { delegatedAdminAccessAssignment.createdDateTime = n.getDateValue(); },
        "lastModifiedDateTime": n => { delegatedAdminAccessAssignment.lastModifiedDateTime = n.getDateValue(); },
        "status": n => { delegatedAdminAccessAssignment.status = n.getEnumValue<DelegatedAdminAccessAssignmentStatus>(DelegatedAdminAccessAssignmentStatus); },
    }
}
