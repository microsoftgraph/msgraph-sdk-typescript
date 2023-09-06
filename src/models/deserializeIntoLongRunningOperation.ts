import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type LongRunningOperation } from './longRunningOperation';
import { LongRunningOperationStatus } from './longRunningOperationStatus';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoLongRunningOperation(longRunningOperation: LongRunningOperation | undefined = {} as LongRunningOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(longRunningOperation),
        "createdDateTime": n => { longRunningOperation.createdDateTime = n.getDateValue(); },
        "lastActionDateTime": n => { longRunningOperation.lastActionDateTime = n.getDateValue(); },
        "resourceLocation": n => { longRunningOperation.resourceLocation = n.getStringValue(); },
        "status": n => { longRunningOperation.status = n.getEnumValue<LongRunningOperationStatus>(LongRunningOperationStatus); },
        "statusDetail": n => { longRunningOperation.statusDetail = n.getStringValue(); },
    }
}
