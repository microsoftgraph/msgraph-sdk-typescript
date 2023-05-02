import {createUnifiedRoleFromDiscriminatorValue} from './createUnifiedRoleFromDiscriminatorValue';
import {DelegatedAdminAccessDetails} from './delegatedAdminAccessDetails';
import {serializeUnifiedRole} from './serializeUnifiedRole';
import {UnifiedRole} from './unifiedRole';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDelegatedAdminAccessDetails(delegatedAdminAccessDetails: DelegatedAdminAccessDetails | undefined = {} as DelegatedAdminAccessDetails) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { delegatedAdminAccessDetails.odataType = n.getStringValue(); },
        "unifiedRoles": n => { delegatedAdminAccessDetails.unifiedRoles = n.getCollectionOfObjectValues<UnifiedRole>(createUnifiedRoleFromDiscriminatorValue); },
    }
}
