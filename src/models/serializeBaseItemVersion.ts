import { type BaseItemVersion } from './baseItemVersion';
import { type IdentitySet } from './identitySet';
import { type PublicationFacet } from './publicationFacet';
import { serializeEntity } from './serializeEntity';
import { serializeIdentitySet } from './serializeIdentitySet';
import { serializePublicationFacet } from './serializePublicationFacet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBaseItemVersion(writer: SerializationWriter, baseItemVersion: BaseItemVersion | undefined = {} as BaseItemVersion) : void {
        serializeEntity(writer, baseItemVersion)
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", baseItemVersion.lastModifiedBy, serializeIdentitySet);
        writer.writeDateValue("lastModifiedDateTime", baseItemVersion.lastModifiedDateTime);
        writer.writeObjectValue<PublicationFacet>("publication", baseItemVersion.publication, serializePublicationFacet);
}
