import { createEntityFromDiscriminatorValue } from './createEntityFromDiscriminatorValue';
import { createResourceReferenceFromDiscriminatorValue } from './createResourceReferenceFromDiscriminatorValue';
import { createResourceVisualizationFromDiscriminatorValue } from './createResourceVisualizationFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type Entity } from './entity';
import { type ResourceReference } from './resourceReference';
import { type ResourceVisualization } from './resourceVisualization';
import { serializeEntity } from './serializeEntity';
import { serializeResourceReference } from './serializeResourceReference';
import { serializeResourceVisualization } from './serializeResourceVisualization';
import { type Trending } from './trending';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTrending(trending: Trending | undefined = {} as Trending) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(trending),
        "lastModifiedDateTime": n => { trending.lastModifiedDateTime = n.getDateValue(); },
        "resource": n => { trending.resource = n.getObjectValue<Entity>(createEntityFromDiscriminatorValue); },
        "resourceReference": n => { trending.resourceReference = n.getObjectValue<ResourceReference>(createResourceReferenceFromDiscriminatorValue); },
        "resourceVisualization": n => { trending.resourceVisualization = n.getObjectValue<ResourceVisualization>(createResourceVisualizationFromDiscriminatorValue); },
        "weight": n => { trending.weight = n.getNumberValue(); },
    }
}
