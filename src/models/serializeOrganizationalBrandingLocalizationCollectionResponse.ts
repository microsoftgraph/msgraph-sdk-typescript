import {OrganizationalBrandingLocalization} from './organizationalBrandingLocalization';
import {OrganizationalBrandingLocalizationCollectionResponse} from './organizationalBrandingLocalizationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOrganizationalBrandingLocalization} from './serializeOrganizationalBrandingLocalization';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOrganizationalBrandingLocalizationCollectionResponse(writer: SerializationWriter, organizationalBrandingLocalizationCollectionResponse: OrganizationalBrandingLocalizationCollectionResponse | undefined = {} as OrganizationalBrandingLocalizationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, organizationalBrandingLocalizationCollectionResponse)
        writer.writeCollectionOfObjectValues<OrganizationalBrandingLocalization>("value", organizationalBrandingLocalizationCollectionResponse.value, serializeOrganizationalBrandingLocalization);
}
