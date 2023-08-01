import {createItemActivityStatFromDiscriminatorValue} from '../../../../../../models/createItemActivityStatFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import type {ItemActivityStat} from '../../../../../../models/itemActivityStat';
import {serializeItemActivityStat} from '../../../../../../models/serializeItemActivityStat';
import type {GetActivitiesByIntervalResponse} from './getActivitiesByIntervalResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetActivitiesByIntervalResponse(getActivitiesByIntervalResponse: GetActivitiesByIntervalResponse | undefined = {} as GetActivitiesByIntervalResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getActivitiesByIntervalResponse),
        "value": n => { getActivitiesByIntervalResponse.value = n.getCollectionOfObjectValues<ItemActivityStat>(createItemActivityStatFromDiscriminatorValue); },
    }
}
