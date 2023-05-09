import {createManagedAppPolicyFromDiscriminatorValue} from './createManagedAppPolicyFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {ManagedAppPolicy} from './managedAppPolicy';
import {ManagedAppPolicyCollectionResponse} from './managedAppPolicyCollectionResponse';
import {serializeManagedAppPolicy} from './serializeManagedAppPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppPolicyCollectionResponse(managedAppPolicyCollectionResponse: ManagedAppPolicyCollectionResponse | undefined = {} as ManagedAppPolicyCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedAppPolicyCollectionResponse),
        "value": n => { managedAppPolicyCollectionResponse.value = n.getCollectionOfObjectValues<ManagedAppPolicy>(createManagedAppPolicyFromDiscriminatorValue); },
    }
}
