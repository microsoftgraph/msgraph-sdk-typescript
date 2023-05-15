import {createEntityFromDiscriminatorValue} from './createEntityFromDiscriminatorValue';
import {createResourceReferenceFromDiscriminatorValue} from './createResourceReferenceFromDiscriminatorValue';
import {createResourceVisualizationFromDiscriminatorValue} from './createResourceVisualizationFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Entity} from './entity';
import {ResourceReference} from './resourceReference';
import {ResourceVisualization} from './resourceVisualization';
import {serializeEntity} from './serializeEntity';
import {serializeResourceReference} from './serializeResourceReference';
import {serializeResourceVisualization} from './serializeResourceVisualization';
import {Trending} from './trending';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
