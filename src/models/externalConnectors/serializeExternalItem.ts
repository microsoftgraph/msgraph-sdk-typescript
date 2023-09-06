import { serializeEntity } from '../serializeEntity';
import { type Acl } from './acl';
import { type ExternalActivity } from './externalActivity';
import { type ExternalItem } from './externalItem';
import { type ExternalItemContent } from './externalItemContent';
import { type Properties } from './properties';
import { serializeAcl } from './serializeAcl';
import { serializeExternalActivity } from './serializeExternalActivity';
import { serializeExternalItemContent } from './serializeExternalItemContent';
import { serializeProperties } from './serializeProperties';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeExternalItem(writer: SerializationWriter, externalItem: ExternalItem | undefined = {} as ExternalItem) : void {
        serializeEntity(writer, externalItem)
        writer.writeCollectionOfObjectValues<Acl>("acl", externalItem.acl, serializeAcl);
        writer.writeCollectionOfObjectValues<ExternalActivity>("activities", externalItem.activities, serializeExternalActivity);
        writer.writeObjectValue<ExternalItemContent>("content", externalItem.content, serializeExternalItemContent);
        writer.writeObjectValue<Properties>("properties", externalItem.properties, serializeProperties);
}
