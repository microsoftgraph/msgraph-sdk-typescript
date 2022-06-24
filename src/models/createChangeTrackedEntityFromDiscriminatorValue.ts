import {ChangeTrackedEntityImpl, OpenShiftImpl, ScheduleChangeRequestImpl, SchedulingGroupImpl, ShiftImpl, ShiftPreferencesImpl, TimeOffImpl, TimeOffReasonImpl, WorkforceIntegrationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChangeTrackedEntityFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChangeTrackedEntityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.openShift":
                    return new OpenShiftImpl();
                case "#microsoft.graph.scheduleChangeRequest":
                    return new ScheduleChangeRequestImpl();
                case "#microsoft.graph.schedulingGroup":
                    return new SchedulingGroupImpl();
                case "#microsoft.graph.shift":
                    return new ShiftImpl();
                case "#microsoft.graph.shiftPreferences":
                    return new ShiftPreferencesImpl();
                case "#microsoft.graph.timeOff":
                    return new TimeOffImpl();
                case "#microsoft.graph.timeOffReason":
                    return new TimeOffReasonImpl();
                case "#microsoft.graph.workforceIntegration":
                    return new WorkforceIntegrationImpl();
            }
        }
    }
    return new ChangeTrackedEntityImpl();
}
