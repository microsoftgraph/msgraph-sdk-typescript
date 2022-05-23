import {GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponseImpl();
}
