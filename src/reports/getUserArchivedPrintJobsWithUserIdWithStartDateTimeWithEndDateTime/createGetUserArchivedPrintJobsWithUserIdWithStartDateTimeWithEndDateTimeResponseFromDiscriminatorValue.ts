import {GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse} from './getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse();
}
