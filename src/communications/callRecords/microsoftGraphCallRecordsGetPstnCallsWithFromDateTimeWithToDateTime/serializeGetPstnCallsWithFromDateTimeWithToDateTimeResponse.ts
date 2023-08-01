import type {PstnCallLogRow} from '../../../models/callRecords/pstnCallLogRow';
import {serializePstnCallLogRow} from '../../../models/callRecords/serializePstnCallLogRow';
import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import type {GetPstnCallsWithFromDateTimeWithToDateTimeResponse} from './getPstnCallsWithFromDateTimeWithToDateTimeResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetPstnCallsWithFromDateTimeWithToDateTimeResponse(writer: SerializationWriter, getPstnCallsWithFromDateTimeWithToDateTimeResponse: GetPstnCallsWithFromDateTimeWithToDateTimeResponse | undefined = {} as GetPstnCallsWithFromDateTimeWithToDateTimeResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getPstnCallsWithFromDateTimeWithToDateTimeResponse)
        writer.writeCollectionOfObjectValues<PstnCallLogRow>("value", getPstnCallsWithFromDateTimeWithToDateTimeResponse.value, serializePstnCallLogRow);
}
