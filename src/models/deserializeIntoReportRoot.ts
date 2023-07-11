import {AuthenticationMethodsRoot} from './authenticationMethodsRoot';
import {createAuthenticationMethodsRootFromDiscriminatorValue} from './createAuthenticationMethodsRootFromDiscriminatorValue';
import {createPrintUsageByPrinterFromDiscriminatorValue} from './createPrintUsageByPrinterFromDiscriminatorValue';
import {createPrintUsageByUserFromDiscriminatorValue} from './createPrintUsageByUserFromDiscriminatorValue';
import {createSecurityReportsRootFromDiscriminatorValue} from './createSecurityReportsRootFromDiscriminatorValue';
import {PrintUsageByPrinter} from './printUsageByPrinter';
import {PrintUsageByUser} from './printUsageByUser';
import {ReportRoot} from './reportRoot';
import {SecurityReportsRoot} from './securityReportsRoot';
import {serializeAuthenticationMethodsRoot} from './serializeAuthenticationMethodsRoot';
import {serializePrintUsageByPrinter} from './serializePrintUsageByPrinter';
import {serializePrintUsageByUser} from './serializePrintUsageByUser';
import {serializeSecurityReportsRoot} from './serializeSecurityReportsRoot';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoReportRoot(reportRoot: ReportRoot | undefined = {} as ReportRoot) : Record<string, (node: ParseNode) => void> {
    return {
        "authenticationMethods": n => { reportRoot.authenticationMethods = n.getObjectValue<AuthenticationMethodsRoot>(createAuthenticationMethodsRootFromDiscriminatorValue); },
        "dailyPrintUsageByPrinter": n => { reportRoot.dailyPrintUsageByPrinter = n.getCollectionOfObjectValues<PrintUsageByPrinter>(createPrintUsageByPrinterFromDiscriminatorValue); },
        "dailyPrintUsageByUser": n => { reportRoot.dailyPrintUsageByUser = n.getCollectionOfObjectValues<PrintUsageByUser>(createPrintUsageByUserFromDiscriminatorValue); },
        "monthlyPrintUsageByPrinter": n => { reportRoot.monthlyPrintUsageByPrinter = n.getCollectionOfObjectValues<PrintUsageByPrinter>(createPrintUsageByPrinterFromDiscriminatorValue); },
        "monthlyPrintUsageByUser": n => { reportRoot.monthlyPrintUsageByUser = n.getCollectionOfObjectValues<PrintUsageByUser>(createPrintUsageByUserFromDiscriminatorValue); },
        "@odata.type": n => { reportRoot.odataType = n.getStringValue(); },
        "security": n => { reportRoot.security = n.getObjectValue<SecurityReportsRoot>(createSecurityReportsRootFromDiscriminatorValue); },
    }
}
