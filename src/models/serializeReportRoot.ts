import { type AuthenticationMethodsRoot } from './authenticationMethodsRoot';
import { type PrintUsageByPrinter } from './printUsageByPrinter';
import { type PrintUsageByUser } from './printUsageByUser';
import { type ReportRoot } from './reportRoot';
import { type SecurityReportsRoot } from './securityReportsRoot';
import { serializeAuthenticationMethodsRoot } from './serializeAuthenticationMethodsRoot';
import { serializePrintUsageByPrinter } from './serializePrintUsageByPrinter';
import { serializePrintUsageByUser } from './serializePrintUsageByUser';
import { serializeSecurityReportsRoot } from './serializeSecurityReportsRoot';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeReportRoot(writer: SerializationWriter, reportRoot: ReportRoot | undefined = {} as ReportRoot) : void {
        writer.writeObjectValue<AuthenticationMethodsRoot>("authenticationMethods", reportRoot.authenticationMethods, serializeAuthenticationMethodsRoot);
        writer.writeCollectionOfObjectValues<PrintUsageByPrinter>("dailyPrintUsageByPrinter", reportRoot.dailyPrintUsageByPrinter, serializePrintUsageByPrinter);
        writer.writeCollectionOfObjectValues<PrintUsageByUser>("dailyPrintUsageByUser", reportRoot.dailyPrintUsageByUser, serializePrintUsageByUser);
        writer.writeCollectionOfObjectValues<PrintUsageByPrinter>("monthlyPrintUsageByPrinter", reportRoot.monthlyPrintUsageByPrinter, serializePrintUsageByPrinter);
        writer.writeCollectionOfObjectValues<PrintUsageByUser>("monthlyPrintUsageByUser", reportRoot.monthlyPrintUsageByUser, serializePrintUsageByUser);
        writer.writeStringValue("@odata.type", reportRoot.odataType);
        writer.writeObjectValue<SecurityReportsRoot>("security", reportRoot.security, serializeSecurityReportsRoot);
        writer.writeAdditionalData(reportRoot.additionalData);
}
