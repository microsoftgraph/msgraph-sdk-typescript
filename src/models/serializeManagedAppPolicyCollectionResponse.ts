import {ManagedAppPolicy} from './managedAppPolicy';
import {ManagedAppPolicyCollectionResponse} from './managedAppPolicyCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedAppPolicy} from './serializeManagedAppPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppPolicyCollectionResponse(writer: SerializationWriter, managedAppPolicyCollectionResponse: ManagedAppPolicyCollectionResponse | undefined = {} as ManagedAppPolicyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedAppPolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<ManagedAppPolicy>("value", managedAppPolicyCollectionResponse.value, serializeManagedAppPolicy);
}
