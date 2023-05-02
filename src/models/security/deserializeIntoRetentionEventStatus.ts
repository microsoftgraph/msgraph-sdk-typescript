import {createPublicErrorFromDiscriminatorValue} from '../createPublicErrorFromDiscriminatorValue';
import {PublicError} from '../publicError';
import {serializePublicError} from '../serializePublicError';
import {EventStatusType} from './eventStatusType';
import {RetentionEventStatus} from './retentionEventStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRetentionEventStatus(retentionEventStatus: RetentionEventStatus | undefined = {} as RetentionEventStatus) : Record<string, (node: ParseNode) => void> {
    return {
        "error": n => { retentionEventStatus.errorEscaped = n.getObjectValue<PublicError>(createPublicErrorFromDiscriminatorValue); },
        "@odata.type": n => { retentionEventStatus.odataType = n.getStringValue(); },
        "status": n => { retentionEventStatus.status = n.getEnumValue<EventStatusType>(EventStatusType); },
    }
}
