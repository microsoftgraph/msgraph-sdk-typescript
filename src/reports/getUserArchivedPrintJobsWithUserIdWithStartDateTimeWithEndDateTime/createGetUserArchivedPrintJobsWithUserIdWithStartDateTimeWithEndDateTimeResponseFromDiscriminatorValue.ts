import {deserializeIntoGetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse} from './deserializeIntoGetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse';
import {GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse;
}
