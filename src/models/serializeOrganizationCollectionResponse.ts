import {Organization} from './organization';
import {OrganizationCollectionResponse} from './organizationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOrganization} from './serializeOrganization';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOrganizationCollectionResponse(writer: SerializationWriter, organizationCollectionResponse: OrganizationCollectionResponse | undefined = {} as OrganizationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, organizationCollectionResponse)
        writer.writeCollectionOfObjectValues<Organization>("value", organizationCollectionResponse.value, serializeOrganization);
}
