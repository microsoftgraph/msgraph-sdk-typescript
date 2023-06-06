import {serializeEntity} from '../serializeEntity';
import {Acl} from './acl';
import {ExternalActivity} from './externalActivity';
import {ExternalItem} from './externalItem';
import {ExternalItemContent} from './externalItemContent';
import {Properties} from './properties';
import {serializeAcl} from './serializeAcl';
import {serializeExternalActivity} from './serializeExternalActivity';
import {serializeExternalItemContent} from './serializeExternalItemContent';
import {serializeProperties} from './serializeProperties';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalItem(writer: SerializationWriter, externalItem: ExternalItem | undefined = {} as ExternalItem) : void {
        serializeEntity(writer, externalItem)
        writer.writeCollectionOfObjectValues<Acl>("acl", externalItem.acl, serializeAcl);
        writer.writeCollectionOfObjectValues<ExternalActivity>("activities", externalItem.activities, serializeExternalActivity);
        writer.writeObjectValue<ExternalItemContent>("content", externalItem.content, serializeExternalItemContent);
        writer.writeObjectValue<Properties>("properties", externalItem.properties, serializeProperties);
}
