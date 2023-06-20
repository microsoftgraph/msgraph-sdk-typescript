import {ManagedAppPolicy} from '../../../models/managedAppPolicy';
import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeManagedAppPolicy} from '../../../models/serializeManagedAppPolicy';
import {GetManagedAppPoliciesResponse} from './getManagedAppPoliciesResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetManagedAppPoliciesResponse(getManagedAppPoliciesResponse: GetManagedAppPoliciesResponse | undefined = {} as GetManagedAppPoliciesResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getManagedAppPoliciesResponse)
        writer.writeCollectionOfObjectValues<ManagedAppPolicy>("value", getManagedAppPoliciesResponse.value, serializeManagedAppPolicy);
}
