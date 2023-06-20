import {BaseItemVersion} from './baseItemVersion';
import {IdentitySet} from './identitySet';
import {PublicationFacet} from './publicationFacet';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializePublicationFacet} from './serializePublicationFacet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBaseItemVersion(baseItemVersion: BaseItemVersion | undefined = {} as BaseItemVersion, writer: SerializationWriter) : void {
        serializeEntity(writer, baseItemVersion)
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", baseItemVersion.lastModifiedBy, serializeIdentitySet);
        writer.writeDateValue("lastModifiedDateTime", baseItemVersion.lastModifiedDateTime);
        writer.writeObjectValue<PublicationFacet>("publication", baseItemVersion.publication, serializePublicationFacet);
}
