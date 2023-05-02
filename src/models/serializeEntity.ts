import {Entity} from './entity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEntity(writer: SerializationWriter, entity: Entity | undefined = {} as Entity) : void {
        writer.writeStringValue("id", entity.id);
        writer.writeStringValue("@odata.type", entity.odataType);
        writer.writeAdditionalData(entity.additionalData);
}
