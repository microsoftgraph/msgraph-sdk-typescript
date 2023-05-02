import {Entity} from './entity';
import {ResourceReference} from './resourceReference';
import {ResourceVisualization} from './resourceVisualization';
import {serializeEntity} from './serializeEntity';
import {serializeResourceReference} from './serializeResourceReference';
import {serializeResourceVisualization} from './serializeResourceVisualization';
import {serializeUsageDetails} from './serializeUsageDetails';
import {UsageDetails} from './usageDetails';
import {UsedInsight} from './usedInsight';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUsedInsight(writer: SerializationWriter, usedInsight: UsedInsight | undefined = {} as UsedInsight) : void {
        serializeEntity(writer, usedInsight)
        writer.writeObjectValue<UsageDetails>("lastUsed", usedInsight.lastUsed, serializeUsageDetails);
        writer.writeObjectValue<Entity>("resource", usedInsight.resource, serializeEntity);
}
