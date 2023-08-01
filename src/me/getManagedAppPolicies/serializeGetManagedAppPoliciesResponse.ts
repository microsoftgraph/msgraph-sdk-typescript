import type {ManagedAppPolicy} from '../../models/managedAppPolicy';
import {serializeBaseCollectionPaginationCountResponse} from '../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeManagedAppPolicy} from '../../models/serializeManagedAppPolicy';
import type {GetManagedAppPoliciesResponse} from './getManagedAppPoliciesResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetManagedAppPoliciesResponse(writer: SerializationWriter, getManagedAppPoliciesResponse: GetManagedAppPoliciesResponse | undefined = {} as GetManagedAppPoliciesResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getManagedAppPoliciesResponse)
        writer.writeCollectionOfObjectValues<ManagedAppPolicy>("value", getManagedAppPoliciesResponse.value, serializeManagedAppPolicy);
}
