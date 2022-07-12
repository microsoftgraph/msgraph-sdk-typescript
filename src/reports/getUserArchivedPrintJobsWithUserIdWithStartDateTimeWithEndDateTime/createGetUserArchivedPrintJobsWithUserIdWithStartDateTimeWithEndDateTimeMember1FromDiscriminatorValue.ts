import {GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeMember1();
}
