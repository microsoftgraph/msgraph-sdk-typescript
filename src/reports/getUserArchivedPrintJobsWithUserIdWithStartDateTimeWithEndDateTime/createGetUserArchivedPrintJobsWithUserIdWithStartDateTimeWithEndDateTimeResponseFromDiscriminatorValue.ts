import { deserializeIntoGetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse } from './deserializeIntoGetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse';
import { type GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse;
}
