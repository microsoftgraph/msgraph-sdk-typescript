import {createManagedAppPolicyFromDiscriminatorValue} from '../../models/createManagedAppPolicyFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {ManagedAppPolicy} from '../../models/managedAppPolicy';
import {serializeManagedAppPolicy} from '../../models/serializeManagedAppPolicy';
import {GetManagedAppPoliciesResponse} from './getManagedAppPoliciesResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetManagedAppPoliciesResponse(getManagedAppPoliciesResponse: GetManagedAppPoliciesResponse | undefined = {} as GetManagedAppPoliciesResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getManagedAppPoliciesResponse),
        "value": n => { getManagedAppPoliciesResponse.value = n.getCollectionOfObjectValues<ManagedAppPolicy>(createManagedAppPolicyFromDiscriminatorValue); },
    }
}
