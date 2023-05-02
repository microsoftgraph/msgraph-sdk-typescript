import {createPstnCallLogRowFromDiscriminatorValue} from '../../../models/callRecords/createPstnCallLogRowFromDiscriminatorValue';
import {PstnCallLogRow} from '../../../models/callRecords/pstnCallLogRow';
import {serializePstnCallLogRow} from '../../../models/callRecords/serializePstnCallLogRow';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {GetPstnCallsWithFromDateTimeWithToDateTimeResponse} from './getPstnCallsWithFromDateTimeWithToDateTimeResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetPstnCallsWithFromDateTimeWithToDateTimeResponse(getPstnCallsWithFromDateTimeWithToDateTimeResponse: GetPstnCallsWithFromDateTimeWithToDateTimeResponse | undefined = {} as GetPstnCallsWithFromDateTimeWithToDateTimeResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getPstnCallsWithFromDateTimeWithToDateTimeResponse),
        "value": n => { getPstnCallsWithFromDateTimeWithToDateTimeResponse.value = n.getCollectionOfObjectValues<PstnCallLogRow>(createPstnCallLogRowFromDiscriminatorValue); },
    }
}
