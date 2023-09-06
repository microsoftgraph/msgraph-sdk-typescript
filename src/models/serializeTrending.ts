import { type Entity } from './entity';
import { type ResourceReference } from './resourceReference';
import { type ResourceVisualization } from './resourceVisualization';
import { serializeEntity } from './serializeEntity';
import { serializeResourceReference } from './serializeResourceReference';
import { serializeResourceVisualization } from './serializeResourceVisualization';
import { type Trending } from './trending';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTrending(writer: SerializationWriter, trending: Trending | undefined = {} as Trending) : void {
        serializeEntity(writer, trending)
        writer.writeDateValue("lastModifiedDateTime", trending.lastModifiedDateTime);
        writer.writeObjectValue<Entity>("resource", trending.resource, serializeEntity);
        writer.writeNumberValue("weight", trending.weight);
}
