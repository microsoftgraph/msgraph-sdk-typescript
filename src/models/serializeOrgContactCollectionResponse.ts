import { type OrgContact } from './orgContact';
import { type OrgContactCollectionResponse } from './orgContactCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeOrgContact } from './serializeOrgContact';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOrgContactCollectionResponse(writer: SerializationWriter, orgContactCollectionResponse: OrgContactCollectionResponse | undefined = {} as OrgContactCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, orgContactCollectionResponse)
        writer.writeCollectionOfObjectValues<OrgContact>("value", orgContactCollectionResponse.value, serializeOrgContact);
}
