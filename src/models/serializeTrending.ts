import {Entity} from './entity';
import {ResourceReference} from './resourceReference';
import {ResourceVisualization} from './resourceVisualization';
import {serializeEntity} from './serializeEntity';
import {serializeResourceReference} from './serializeResourceReference';
import {serializeResourceVisualization} from './serializeResourceVisualization';
import {Trending} from './trending';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTrending(writer: SerializationWriter, trending: Trending | undefined = {} as Trending) : void {
        serializeEntity(writer, trending)
        writer.writeDateValue("lastModifiedDateTime", trending.lastModifiedDateTime);
        writer.writeObjectValue<Entity>("resource", trending.resource, serializeEntity);
        writer.writeNumberValue("weight", trending.weight);
}
