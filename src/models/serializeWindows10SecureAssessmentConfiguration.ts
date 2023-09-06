import { serializeDeviceConfiguration } from './serializeDeviceConfiguration';
import { type Windows10SecureAssessmentConfiguration } from './windows10SecureAssessmentConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindows10SecureAssessmentConfiguration(writer: SerializationWriter, windows10SecureAssessmentConfiguration: Windows10SecureAssessmentConfiguration | undefined = {} as Windows10SecureAssessmentConfiguration) : void {
        serializeDeviceConfiguration(writer, windows10SecureAssessmentConfiguration)
        writer.writeBooleanValue("allowPrinting", windows10SecureAssessmentConfiguration.allowPrinting);
        writer.writeBooleanValue("allowScreenCapture", windows10SecureAssessmentConfiguration.allowScreenCapture);
        writer.writeBooleanValue("allowTextSuggestion", windows10SecureAssessmentConfiguration.allowTextSuggestion);
        writer.writeStringValue("configurationAccount", windows10SecureAssessmentConfiguration.configurationAccount);
        writer.writeStringValue("launchUri", windows10SecureAssessmentConfiguration.launchUri);
}
