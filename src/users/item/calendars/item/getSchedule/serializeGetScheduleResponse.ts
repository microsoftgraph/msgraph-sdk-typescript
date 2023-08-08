import type {ScheduleInformation} from '../../../../../models/scheduleInformation';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeScheduleInformation} from '../../../../../models/serializeScheduleInformation';
import type {GetScheduleResponse} from './getScheduleResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetScheduleResponse(writer: SerializationWriter, getScheduleResponse: GetScheduleResponse | undefined = {} as GetScheduleResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getScheduleResponse)
        writer.writeCollectionOfObjectValues<ScheduleInformation>("value", getScheduleResponse.value, serializeScheduleInformation);
}
