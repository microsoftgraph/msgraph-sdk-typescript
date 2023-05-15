import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {Windows10SecureAssessmentConfiguration} from './windows10SecureAssessmentConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows10SecureAssessmentConfiguration(windows10SecureAssessmentConfiguration: Windows10SecureAssessmentConfiguration | undefined = {} as Windows10SecureAssessmentConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(windows10SecureAssessmentConfiguration),
        "allowPrinting": n => { windows10SecureAssessmentConfiguration.allowPrinting = n.getBooleanValue(); },
        "allowScreenCapture": n => { windows10SecureAssessmentConfiguration.allowScreenCapture = n.getBooleanValue(); },
        "allowTextSuggestion": n => { windows10SecureAssessmentConfiguration.allowTextSuggestion = n.getBooleanValue(); },
        "configurationAccount": n => { windows10SecureAssessmentConfiguration.configurationAccount = n.getStringValue(); },
        "launchUri": n => { windows10SecureAssessmentConfiguration.launchUri = n.getStringValue(); },
    }
}
