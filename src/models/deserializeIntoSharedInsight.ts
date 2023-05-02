import {createEntityFromDiscriminatorValue} from './createEntityFromDiscriminatorValue';
import {createResourceReferenceFromDiscriminatorValue} from './createResourceReferenceFromDiscriminatorValue';
import {createResourceVisualizationFromDiscriminatorValue} from './createResourceVisualizationFromDiscriminatorValue';
import {createSharingDetailFromDiscriminatorValue} from './createSharingDetailFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Entity} from './entity';
import {ResourceReference} from './resourceReference';
import {ResourceVisualization} from './resourceVisualization';
import {serializeEntity} from './serializeEntity';
import {serializeResourceReference} from './serializeResourceReference';
import {serializeResourceVisualization} from './serializeResourceVisualization';
import {serializeSharingDetail} from './serializeSharingDetail';
import {SharedInsight} from './sharedInsight';
import {SharingDetail} from './sharingDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharedInsight(sharedInsight: SharedInsight | undefined = {} as SharedInsight) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(sharedInsight),
        "lastShared": n => { sharedInsight.lastShared = n.getObjectValue<SharingDetail>(createSharingDetailFromDiscriminatorValue); },
        "lastSharedMethod": n => { sharedInsight.lastSharedMethod = n.getObjectValue<Entity>(createEntityFromDiscriminatorValue); },
        "resource": n => { sharedInsight.resource = n.getObjectValue<Entity>(createEntityFromDiscriminatorValue); },
        "resourceReference": n => { sharedInsight.resourceReference = n.getObjectValue<ResourceReference>(createResourceReferenceFromDiscriminatorValue); },
        "resourceVisualization": n => { sharedInsight.resourceVisualization = n.getObjectValue<ResourceVisualization>(createResourceVisualizationFromDiscriminatorValue); },
        "sharingHistory": n => { sharedInsight.sharingHistory = n.getCollectionOfObjectValues<SharingDetail>(createSharingDetailFromDiscriminatorValue); },
    }
}
