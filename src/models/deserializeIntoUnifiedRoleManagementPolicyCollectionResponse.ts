import {createUnifiedRoleManagementPolicyFromDiscriminatorValue} from './createUnifiedRoleManagementPolicyFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleManagementPolicy} from './serializeUnifiedRoleManagementPolicy';
import type {UnifiedRoleManagementPolicy} from './unifiedRoleManagementPolicy';
import type {UnifiedRoleManagementPolicyCollectionResponse} from './unifiedRoleManagementPolicyCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyCollectionResponse(unifiedRoleManagementPolicyCollectionResponse: UnifiedRoleManagementPolicyCollectionResponse | undefined = {} as UnifiedRoleManagementPolicyCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleManagementPolicyCollectionResponse),
        "value": n => { unifiedRoleManagementPolicyCollectionResponse.value = n.getCollectionOfObjectValues<UnifiedRoleManagementPolicy>(createUnifiedRoleManagementPolicyFromDiscriminatorValue); },
    }
}
