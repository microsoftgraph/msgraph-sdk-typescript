import type {PublicError} from '../publicError';
import {serializePublicError} from '../serializePublicError';
import {EventStatusType} from './eventStatusType';
import type {RetentionEventStatus} from './retentionEventStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRetentionEventStatus(writer: SerializationWriter, retentionEventStatus: RetentionEventStatus | undefined = {} as RetentionEventStatus) : void {
        writer.writeObjectValue<PublicError>("error", retentionEventStatus.errorEscaped, serializePublicError);
        writer.writeStringValue("@odata.type", retentionEventStatus.odataType);
        writer.writeEnumValue<EventStatusType>("status", retentionEventStatus.status);
        writer.writeAdditionalData(retentionEventStatus.additionalData);
}
