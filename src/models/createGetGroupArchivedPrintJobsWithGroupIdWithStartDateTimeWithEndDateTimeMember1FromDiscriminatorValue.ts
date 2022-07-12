import {GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeMember1();
}
