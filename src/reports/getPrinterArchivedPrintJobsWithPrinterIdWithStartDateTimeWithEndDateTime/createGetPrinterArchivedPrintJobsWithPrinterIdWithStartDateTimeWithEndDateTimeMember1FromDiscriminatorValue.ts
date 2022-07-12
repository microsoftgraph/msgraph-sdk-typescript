import {GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeMember1();
}
