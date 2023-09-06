import { createUnifiedRoleFromDiscriminatorValue } from './createUnifiedRoleFromDiscriminatorValue';
import { type DelegatedAdminAccessDetails } from './delegatedAdminAccessDetails';
import { serializeUnifiedRole } from './serializeUnifiedRole';
import { type UnifiedRole } from './unifiedRole';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDelegatedAdminAccessDetails(delegatedAdminAccessDetails: DelegatedAdminAccessDetails | undefined = {} as DelegatedAdminAccessDetails) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { delegatedAdminAccessDetails.odataType = n.getStringValue(); },
        "unifiedRoles": n => { delegatedAdminAccessDetails.unifiedRoles = n.getCollectionOfObjectValues<UnifiedRole>(createUnifiedRoleFromDiscriminatorValue); },
    }
}
