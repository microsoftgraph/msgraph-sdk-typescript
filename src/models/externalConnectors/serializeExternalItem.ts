import {serializeEntity} from '../serializeEntity';
import {Acl} from './acl';
import {ExternalItem} from './externalItem';
import {ExternalItemContent} from './externalItemContent';
import {Properties} from './properties';
import {serializeAcl} from './serializeAcl';
import {serializeExternalItemContent} from './serializeExternalItemContent';
import {serializeProperties} from './serializeProperties';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalItem(writer: SerializationWriter, externalItem: ExternalItem | undefined = {} as ExternalItem) : void {
        serializeEntity(writer, externalItem)
        writer.writeCollectionOfObjectValues<Acl>("acl", externalItem.acl, serializeAcl);
        writer.writeObjectValue<ExternalItemContent>("content", externalItem.content, serializeExternalItemContent);
        writer.writeObjectValue<Properties>("properties", externalItem.properties, serializeProperties);
}
