import type {AuthenticationMethodsRoot} from './authenticationMethodsRoot';
import {createAuthenticationMethodsRootFromDiscriminatorValue} from './createAuthenticationMethodsRootFromDiscriminatorValue';
import {createPrintUsageByPrinterFromDiscriminatorValue} from './createPrintUsageByPrinterFromDiscriminatorValue';
import {createPrintUsageByUserFromDiscriminatorValue} from './createPrintUsageByUserFromDiscriminatorValue';
import {createSecurityReportsRootFromDiscriminatorValue} from './createSecurityReportsRootFromDiscriminatorValue';
import type {PrintUsageByPrinter} from './printUsageByPrinter';
import type {PrintUsageByUser} from './printUsageByUser';
import type {ReportRoot} from './reportRoot';
import type {SecurityReportsRoot} from './securityReportsRoot';
import {serializeAuthenticationMethodsRoot} from './serializeAuthenticationMethodsRoot';
import {serializePrintUsageByPrinter} from './serializePrintUsageByPrinter';
import {serializePrintUsageByUser} from './serializePrintUsageByUser';
import {serializeSecurityReportsRoot} from './serializeSecurityReportsRoot';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
