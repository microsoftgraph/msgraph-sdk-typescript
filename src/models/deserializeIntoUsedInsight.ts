import {createEntityFromDiscriminatorValue} from './createEntityFromDiscriminatorValue';
import {createResourceReferenceFromDiscriminatorValue} from './createResourceReferenceFromDiscriminatorValue';
import {createResourceVisualizationFromDiscriminatorValue} from './createResourceVisualizationFromDiscriminatorValue';
import {createUsageDetailsFromDiscriminatorValue} from './createUsageDetailsFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
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

export function deserializeIntoUsedInsight(usedInsight: UsedInsight | undefined = {} as UsedInsight) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(usedInsight),
        "lastUsed": n => { usedInsight.lastUsed = n.getObjectValue<UsageDetails>(createUsageDetailsFromDiscriminatorValue); },
        "resource": n => { usedInsight.resource = n.getObjectValue<Entity>(createEntityFromDiscriminatorValue); },
        "resourceReference": n => { usedInsight.resourceReference = n.getObjectValue<ResourceReference>(createResourceReferenceFromDiscriminatorValue); },
        "resourceVisualization": n => { usedInsight.resourceVisualization = n.getObjectValue<ResourceVisualization>(createResourceVisualizationFromDiscriminatorValue); },
    }
}
