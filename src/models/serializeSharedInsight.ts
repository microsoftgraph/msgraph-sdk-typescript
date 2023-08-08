import type {Entity} from './entity';
import type {ResourceReference} from './resourceReference';
import type {ResourceVisualization} from './resourceVisualization';
import {serializeEntity} from './serializeEntity';
import {serializeResourceReference} from './serializeResourceReference';
import {serializeResourceVisualization} from './serializeResourceVisualization';
import {serializeSharingDetail} from './serializeSharingDetail';
import type {SharedInsight} from './sharedInsight';
import type {SharingDetail} from './sharingDetail';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharedInsight(writer: SerializationWriter, sharedInsight: SharedInsight | undefined = {} as SharedInsight) : void {
        serializeEntity(writer, sharedInsight)
        writer.writeObjectValue<SharingDetail>("lastShared", sharedInsight.lastShared, serializeSharingDetail);
        writer.writeObjectValue<Entity>("lastSharedMethod", sharedInsight.lastSharedMethod, serializeEntity);
        writer.writeObjectValue<Entity>("resource", sharedInsight.resource, serializeEntity);
        writer.writeCollectionOfObjectValues<SharingDetail>("sharingHistory", sharedInsight.sharingHistory, serializeSharingDetail);
}
