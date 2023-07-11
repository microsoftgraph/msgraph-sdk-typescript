import {AuthenticationMethodsRoot} from './authenticationMethodsRoot';
import {PrintUsageByPrinter} from './printUsageByPrinter';
import {PrintUsageByUser} from './printUsageByUser';
import {SecurityReportsRoot} from './securityReportsRoot';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ReportRoot extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Container for navigation properties for Azure AD authentication methods resources.
     */
    authenticationMethods?: AuthenticationMethodsRoot | undefined;
    /**
     * Retrieve a list of daily print usage summaries, grouped by printer.
     */
    dailyPrintUsageByPrinter?: PrintUsageByPrinter[] | undefined;
    /**
     * Retrieve a list of daily print usage summaries, grouped by user.
     */
    dailyPrintUsageByUser?: PrintUsageByUser[] | undefined;
    /**
     * Retrieve a list of monthly print usage summaries, grouped by printer.
     */
    monthlyPrintUsageByPrinter?: PrintUsageByPrinter[] | undefined;
    /**
     * Retrieve a list of monthly print usage summaries, grouped by user.
     */
    monthlyPrintUsageByUser?: PrintUsageByUser[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Represents an abstract type that contains resources for attack simulation and training reports.
     */
    security?: SecurityReportsRoot | undefined;
}
