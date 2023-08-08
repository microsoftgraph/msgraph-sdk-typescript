import type {ConnectedOrganization} from './connectedOrganization';
import type {ConnectedOrganizationCollectionResponse} from './connectedOrganizationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeConnectedOrganization} from './serializeConnectedOrganization';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConnectedOrganizationCollectionResponse(writer: SerializationWriter, connectedOrganizationCollectionResponse: ConnectedOrganizationCollectionResponse | undefined = {} as ConnectedOrganizationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, connectedOrganizationCollectionResponse)
        writer.writeCollectionOfObjectValues<ConnectedOrganization>("value", connectedOrganizationCollectionResponse.value, serializeConnectedOrganization);
}
