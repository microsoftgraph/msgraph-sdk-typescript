import type {AppManagementPolicy} from './appManagementPolicy';
import type {AppManagementPolicyCollectionResponse} from './appManagementPolicyCollectionResponse';
import {createAppManagementPolicyFromDiscriminatorValue} from './createAppManagementPolicyFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAppManagementPolicy} from './serializeAppManagementPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppManagementPolicyCollectionResponse(appManagementPolicyCollectionResponse: AppManagementPolicyCollectionResponse | undefined = {} as AppManagementPolicyCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(appManagementPolicyCollectionResponse),
        "value": n => { appManagementPolicyCollectionResponse.value = n.getCollectionOfObjectValues<AppManagementPolicy>(createAppManagementPolicyFromDiscriminatorValue); },
    }
}
