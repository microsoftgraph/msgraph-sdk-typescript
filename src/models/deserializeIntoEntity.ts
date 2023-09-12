import { type Entity } from './entity';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEntity(entity: Entity | undefined = {} as Entity) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { entity.id = n.getStringValue(); },
        "@odata.type": n => { entity.odataType = n.getStringValue(); },
    }
}
