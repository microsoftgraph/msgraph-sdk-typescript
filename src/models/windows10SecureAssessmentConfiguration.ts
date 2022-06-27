import {DeviceConfiguration} from './deviceConfiguration';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Windows10SecureAssessmentConfiguration extends Partial<AdditionalDataHolder>, DeviceConfiguration, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Indicates whether or not to allow the app from printing during the test. */
    allowPrinting?: boolean | undefined;
    /** Indicates whether or not to allow screen capture capability during a test. */
    allowScreenCapture?: boolean | undefined;
    /** Indicates whether or not to allow text suggestions during the test. */
    allowTextSuggestion?: boolean | undefined;
    /** The account used to configure the Windows device for taking the test. The user can be a domain account (domain/user), an AAD account (username@tenant.com) or a local account (username). */
    configurationAccount?: string | undefined;
    /** Url link to an assessment that's automatically loaded when the secure assessment browser is launched. It has to be a valid Url (http[s]://msdn.microsoft.com/). */
    launchUri?: string | undefined;
}
