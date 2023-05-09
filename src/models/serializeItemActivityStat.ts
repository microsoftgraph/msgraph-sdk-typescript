import {IncompleteData} from './incompleteData';
import {ItemActionStat} from './itemActionStat';
import {ItemActivity} from './itemActivity';
import {ItemActivityStat} from './itemActivityStat';
import {serializeEntity} from './serializeEntity';
import {serializeIncompleteData} from './serializeIncompleteData';
import {serializeItemActionStat} from './serializeItemActionStat';
import {serializeItemActivity} from './serializeItemActivity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemActivityStat(writer: SerializationWriter, itemActivityStat: ItemActivityStat | undefined = {} as ItemActivityStat) : void {
        serializeEntity(writer, itemActivityStat)
        writer.writeObjectValue<ItemActionStat>("access", itemActivityStat.access, serializeItemActionStat);
        writer.writeCollectionOfObjectValues<ItemActivity>("activities", itemActivityStat.activities, serializeItemActivity);
        writer.writeObjectValue<ItemActionStat>("create", itemActivityStat.create, serializeItemActionStat);
        writer.writeObjectValue<ItemActionStat>("delete", itemActivityStat.delete, serializeItemActionStat);
        writer.writeObjectValue<ItemActionStat>("edit", itemActivityStat.edit, serializeItemActionStat);
        writer.writeDateValue("endDateTime", itemActivityStat.endDateTime);
        writer.writeObjectValue<IncompleteData>("incompleteData", itemActivityStat.incompleteData, serializeIncompleteData);
        writer.writeBooleanValue("isTrending", itemActivityStat.isTrending);
        writer.writeObjectValue<ItemActionStat>("move", itemActivityStat.move, serializeItemActionStat);
        writer.writeDateValue("startDateTime", itemActivityStat.startDateTime);
}
