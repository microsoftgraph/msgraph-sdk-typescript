import {createTimeOffFromDiscriminatorValue} from './createTimeOffFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeTimeOff} from './serializeTimeOff';
import {TimeOff} from './timeOff';
import {TimeOffCollectionResponse} from './timeOffCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeOffCollectionResponse(timeOffCollectionResponse: TimeOffCollectionResponse | undefined = {} as TimeOffCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(timeOffCollectionResponse),
        "value": n => { timeOffCollectionResponse.value = n.getCollectionOfObjectValues<TimeOff>(createTimeOffFromDiscriminatorValue); },
    }
}
