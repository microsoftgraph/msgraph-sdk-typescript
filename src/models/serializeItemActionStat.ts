import { type ItemActionStat } from './itemActionStat';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeItemActionStat(writer: SerializationWriter, itemActionStat: ItemActionStat | undefined = {} as ItemActionStat) : void {
        writer.writeNumberValue("actionCount", itemActionStat.actionCount);
        writer.writeNumberValue("actorCount", itemActionStat.actorCount);
        writer.writeStringValue("@odata.type", itemActionStat.odataType);
        writer.writeAdditionalData(itemActionStat.additionalData);
}
