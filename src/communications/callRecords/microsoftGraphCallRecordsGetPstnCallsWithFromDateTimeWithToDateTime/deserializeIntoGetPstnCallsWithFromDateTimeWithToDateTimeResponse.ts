import { createPstnCallLogRowFromDiscriminatorValue } from '../../../models/callRecords/createPstnCallLogRowFromDiscriminatorValue';
import { type PstnCallLogRow } from '../../../models/callRecords/pstnCallLogRow';
import { serializePstnCallLogRow } from '../../../models/callRecords/serializePstnCallLogRow';
import { deserializeIntoBaseCollectionPaginationCountResponse } from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import { type GetPstnCallsWithFromDateTimeWithToDateTimeResponse } from './getPstnCallsWithFromDateTimeWithToDateTimeResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGetPstnCallsWithFromDateTimeWithToDateTimeResponse(getPstnCallsWithFromDateTimeWithToDateTimeResponse: GetPstnCallsWithFromDateTimeWithToDateTimeResponse | undefined = {} as GetPstnCallsWithFromDateTimeWithToDateTimeResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getPstnCallsWithFromDateTimeWithToDateTimeResponse),
        "value": n => { getPstnCallsWithFromDateTimeWithToDateTimeResponse.value = n.getCollectionOfObjectValues<PstnCallLogRow>(createPstnCallLogRowFromDiscriminatorValue); },
    }
}
