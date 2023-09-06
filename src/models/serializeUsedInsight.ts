import { type Entity } from './entity';
import { type ResourceReference } from './resourceReference';
import { type ResourceVisualization } from './resourceVisualization';
import { serializeEntity } from './serializeEntity';
import { serializeResourceReference } from './serializeResourceReference';
import { serializeResourceVisualization } from './serializeResourceVisualization';
import { serializeUsageDetails } from './serializeUsageDetails';
import { type UsageDetails } from './usageDetails';
import { type UsedInsight } from './usedInsight';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUsedInsight(writer: SerializationWriter, usedInsight: UsedInsight | undefined = {} as UsedInsight) : void {
        serializeEntity(writer, usedInsight)
        writer.writeObjectValue<UsageDetails>("lastUsed", usedInsight.lastUsed, serializeUsageDetails);
        writer.writeObjectValue<Entity>("resource", usedInsight.resource, serializeEntity);
}
