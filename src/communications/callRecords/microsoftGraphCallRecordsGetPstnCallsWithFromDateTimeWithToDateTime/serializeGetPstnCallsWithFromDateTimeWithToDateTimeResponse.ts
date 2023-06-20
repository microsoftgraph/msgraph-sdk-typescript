import {PstnCallLogRow} from '../../../models/callRecords/pstnCallLogRow';
import {serializePstnCallLogRow} from '../../../models/callRecords/serializePstnCallLogRow';
import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {GetPstnCallsWithFromDateTimeWithToDateTimeResponse} from './getPstnCallsWithFromDateTimeWithToDateTimeResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetPstnCallsWithFromDateTimeWithToDateTimeResponse(getPstnCallsWithFromDateTimeWithToDateTimeResponse: GetPstnCallsWithFromDateTimeWithToDateTimeResponse | undefined = {} as GetPstnCallsWithFromDateTimeWithToDateTimeResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getPstnCallsWithFromDateTimeWithToDateTimeResponse)
        writer.writeCollectionOfObjectValues<PstnCallLogRow>("value", getPstnCallsWithFromDateTimeWithToDateTimeResponse.value, serializePstnCallLogRow);
}
