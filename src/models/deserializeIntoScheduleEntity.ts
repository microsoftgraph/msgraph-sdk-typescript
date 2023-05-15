import {ScheduleEntity} from './scheduleEntity';
import {ScheduleEntityTheme} from './scheduleEntityTheme';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoScheduleEntity(scheduleEntity: ScheduleEntity | undefined = {} as ScheduleEntity) : Record<string, (node: ParseNode) => void> {
    return {
        "endDateTime": n => { scheduleEntity.endDateTime = n.getDateValue(); },
        "@odata.type": n => { scheduleEntity.odataType = n.getStringValue(); },
        "startDateTime": n => { scheduleEntity.startDateTime = n.getDateValue(); },
        "theme": n => { scheduleEntity.theme = n.getEnumValue<ScheduleEntityTheme>(ScheduleEntityTheme); },
    }
}
