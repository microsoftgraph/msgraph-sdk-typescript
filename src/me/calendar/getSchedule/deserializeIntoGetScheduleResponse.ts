import {createScheduleInformationFromDiscriminatorValue} from '../../../models/createScheduleInformationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import type {ScheduleInformation} from '../../../models/scheduleInformation';
import {serializeScheduleInformation} from '../../../models/serializeScheduleInformation';
import type {GetScheduleResponse} from './getScheduleResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetScheduleResponse(getScheduleResponse: GetScheduleResponse | undefined = {} as GetScheduleResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getScheduleResponse),
        "value": n => { getScheduleResponse.value = n.getCollectionOfObjectValues<ScheduleInformation>(createScheduleInformationFromDiscriminatorValue); },
    }
}
