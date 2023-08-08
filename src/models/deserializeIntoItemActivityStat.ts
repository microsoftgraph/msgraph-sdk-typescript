import {createIncompleteDataFromDiscriminatorValue} from './createIncompleteDataFromDiscriminatorValue';
import {createItemActionStatFromDiscriminatorValue} from './createItemActionStatFromDiscriminatorValue';
import {createItemActivityFromDiscriminatorValue} from './createItemActivityFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {IncompleteData} from './incompleteData';
import type {ItemActionStat} from './itemActionStat';
import type {ItemActivity} from './itemActivity';
import type {ItemActivityStat} from './itemActivityStat';
import {serializeIncompleteData} from './serializeIncompleteData';
import {serializeItemActionStat} from './serializeItemActionStat';
import {serializeItemActivity} from './serializeItemActivity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemActivityStat(itemActivityStat: ItemActivityStat | undefined = {} as ItemActivityStat) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(itemActivityStat),
        "access": n => { itemActivityStat.access = n.getObjectValue<ItemActionStat>(createItemActionStatFromDiscriminatorValue); },
        "activities": n => { itemActivityStat.activities = n.getCollectionOfObjectValues<ItemActivity>(createItemActivityFromDiscriminatorValue); },
        "create": n => { itemActivityStat.create = n.getObjectValue<ItemActionStat>(createItemActionStatFromDiscriminatorValue); },
        "delete": n => { itemActivityStat.delete = n.getObjectValue<ItemActionStat>(createItemActionStatFromDiscriminatorValue); },
        "edit": n => { itemActivityStat.edit = n.getObjectValue<ItemActionStat>(createItemActionStatFromDiscriminatorValue); },
        "endDateTime": n => { itemActivityStat.endDateTime = n.getDateValue(); },
        "incompleteData": n => { itemActivityStat.incompleteData = n.getObjectValue<IncompleteData>(createIncompleteDataFromDiscriminatorValue); },
        "isTrending": n => { itemActivityStat.isTrending = n.getBooleanValue(); },
        "move": n => { itemActivityStat.move = n.getObjectValue<ItemActionStat>(createItemActionStatFromDiscriminatorValue); },
        "startDateTime": n => { itemActivityStat.startDateTime = n.getDateValue(); },
    }
}
