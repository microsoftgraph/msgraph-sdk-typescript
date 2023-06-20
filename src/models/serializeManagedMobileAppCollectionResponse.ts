import {ManagedMobileApp} from './managedMobileApp';
import {ManagedMobileAppCollectionResponse} from './managedMobileAppCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedMobileApp} from './serializeManagedMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedMobileAppCollectionResponse(managedMobileAppCollectionResponse: ManagedMobileAppCollectionResponse | undefined = {} as ManagedMobileAppCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedMobileAppCollectionResponse)
        writer.writeCollectionOfObjectValues<ManagedMobileApp>("value", managedMobileAppCollectionResponse.value, serializeManagedMobileApp);
}
