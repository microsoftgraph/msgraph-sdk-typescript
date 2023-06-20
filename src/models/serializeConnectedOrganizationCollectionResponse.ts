import {ConnectedOrganization} from './connectedOrganization';
import {ConnectedOrganizationCollectionResponse} from './connectedOrganizationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeConnectedOrganization} from './serializeConnectedOrganization';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConnectedOrganizationCollectionResponse(connectedOrganizationCollectionResponse: ConnectedOrganizationCollectionResponse | undefined = {} as ConnectedOrganizationCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, connectedOrganizationCollectionResponse)
        writer.writeCollectionOfObjectValues<ConnectedOrganization>("value", connectedOrganizationCollectionResponse.value, serializeConnectedOrganization);
}
