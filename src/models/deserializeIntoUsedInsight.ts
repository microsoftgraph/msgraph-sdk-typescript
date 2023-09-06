import { createEntityFromDiscriminatorValue } from './createEntityFromDiscriminatorValue';
import { createResourceReferenceFromDiscriminatorValue } from './createResourceReferenceFromDiscriminatorValue';
import { createResourceVisualizationFromDiscriminatorValue } from './createResourceVisualizationFromDiscriminatorValue';
import { createUsageDetailsFromDiscriminatorValue } from './createUsageDetailsFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
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

export function deserializeIntoUsedInsight(usedInsight: UsedInsight | undefined = {} as UsedInsight) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(usedInsight),
        "lastUsed": n => { usedInsight.lastUsed = n.getObjectValue<UsageDetails>(createUsageDetailsFromDiscriminatorValue); },
        "resource": n => { usedInsight.resource = n.getObjectValue<Entity>(createEntityFromDiscriminatorValue); },
        "resourceReference": n => { usedInsight.resourceReference = n.getObjectValue<ResourceReference>(createResourceReferenceFromDiscriminatorValue); },
        "resourceVisualization": n => { usedInsight.resourceVisualization = n.getObjectValue<ResourceVisualization>(createResourceVisualizationFromDiscriminatorValue); },
    }
}
