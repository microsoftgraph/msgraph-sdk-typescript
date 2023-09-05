import { type ScheduleEntity } from './scheduleEntity';
import { ScheduleEntityTheme } from './scheduleEntityTheme';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeScheduleEntity(writer: SerializationWriter, scheduleEntity: ScheduleEntity | undefined = {} as ScheduleEntity) : void {
        writer.writeDateValue("endDateTime", scheduleEntity.endDateTime);
        writer.writeStringValue("@odata.type", scheduleEntity.odataType);
        writer.writeDateValue("startDateTime", scheduleEntity.startDateTime);
        writer.writeEnumValue<ScheduleEntityTheme>("theme", scheduleEntity.theme);
        writer.writeAdditionalData(scheduleEntity.additionalData);
}
