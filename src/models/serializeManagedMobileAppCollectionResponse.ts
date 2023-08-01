import type {ManagedMobileApp} from './managedMobileApp';
import type {ManagedMobileAppCollectionResponse} from './managedMobileAppCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedMobileApp} from './serializeManagedMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedMobileAppCollectionResponse(writer: SerializationWriter, managedMobileAppCollectionResponse: ManagedMobileAppCollectionResponse | undefined = {} as ManagedMobileAppCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedMobileAppCollectionResponse)
        writer.writeCollectionOfObjectValues<ManagedMobileApp>("value", managedMobileAppCollectionResponse.value, serializeManagedMobileApp);
}
