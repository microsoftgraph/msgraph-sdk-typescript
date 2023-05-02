import {createDelegatedAdminAccessAssignmentFromDiscriminatorValue} from './createDelegatedAdminAccessAssignmentFromDiscriminatorValue';
import {DelegatedAdminAccessAssignment} from './delegatedAdminAccessAssignment';
import {DelegatedAdminAccessAssignmentCollectionResponse} from './delegatedAdminAccessAssignmentCollectionResponse';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeDelegatedAdminAccessAssignment} from './serializeDelegatedAdminAccessAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDelegatedAdminAccessAssignmentCollectionResponse(delegatedAdminAccessAssignmentCollectionResponse: DelegatedAdminAccessAssignmentCollectionResponse | undefined = {} as DelegatedAdminAccessAssignmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(delegatedAdminAccessAssignmentCollectionResponse),
        "value": n => { delegatedAdminAccessAssignmentCollectionResponse.value = n.getCollectionOfObjectValues<DelegatedAdminAccessAssignment>(createDelegatedAdminAccessAssignmentFromDiscriminatorValue); },
    }
}
