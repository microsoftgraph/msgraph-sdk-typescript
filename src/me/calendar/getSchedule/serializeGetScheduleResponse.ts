import {ScheduleInformation} from '../../../models/scheduleInformation';
import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeScheduleInformation} from '../../../models/serializeScheduleInformation';
import {GetScheduleResponse} from './getScheduleResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetScheduleResponse(getScheduleResponse: GetScheduleResponse | undefined = {} as GetScheduleResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getScheduleResponse)
        writer.writeCollectionOfObjectValues<ScheduleInformation>("value", getScheduleResponse.value, serializeScheduleInformation);
}
