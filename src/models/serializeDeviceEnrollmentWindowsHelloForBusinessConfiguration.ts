import {DeviceEnrollmentWindowsHelloForBusinessConfiguration} from './deviceEnrollmentWindowsHelloForBusinessConfiguration';
import {Enablement} from './enablement';
import {serializeDeviceEnrollmentConfiguration} from './serializeDeviceEnrollmentConfiguration';
import {WindowsHelloForBusinessPinUsage} from './windowsHelloForBusinessPinUsage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceEnrollmentWindowsHelloForBusinessConfiguration(writer: SerializationWriter, deviceEnrollmentWindowsHelloForBusinessConfiguration: DeviceEnrollmentWindowsHelloForBusinessConfiguration | undefined = {} as DeviceEnrollmentWindowsHelloForBusinessConfiguration) : void {
        serializeDeviceEnrollmentConfiguration(writer, deviceEnrollmentWindowsHelloForBusinessConfiguration)
        writer.writeEnumValue<Enablement>("enhancedBiometricsState", deviceEnrollmentWindowsHelloForBusinessConfiguration.enhancedBiometricsState);
        writer.writeNumberValue("pinExpirationInDays", deviceEnrollmentWindowsHelloForBusinessConfiguration.pinExpirationInDays);
        writer.writeEnumValue<WindowsHelloForBusinessPinUsage>("pinLowercaseCharactersUsage", deviceEnrollmentWindowsHelloForBusinessConfiguration.pinLowercaseCharactersUsage);
        writer.writeNumberValue("pinMaximumLength", deviceEnrollmentWindowsHelloForBusinessConfiguration.pinMaximumLength);
        writer.writeNumberValue("pinMinimumLength", deviceEnrollmentWindowsHelloForBusinessConfiguration.pinMinimumLength);
        writer.writeNumberValue("pinPreviousBlockCount", deviceEnrollmentWindowsHelloForBusinessConfiguration.pinPreviousBlockCount);
        writer.writeEnumValue<WindowsHelloForBusinessPinUsage>("pinSpecialCharactersUsage", deviceEnrollmentWindowsHelloForBusinessConfiguration.pinSpecialCharactersUsage);
        writer.writeEnumValue<WindowsHelloForBusinessPinUsage>("pinUppercaseCharactersUsage", deviceEnrollmentWindowsHelloForBusinessConfiguration.pinUppercaseCharactersUsage);
        writer.writeBooleanValue("remotePassportEnabled", deviceEnrollmentWindowsHelloForBusinessConfiguration.remotePassportEnabled);
        writer.writeBooleanValue("securityDeviceRequired", deviceEnrollmentWindowsHelloForBusinessConfiguration.securityDeviceRequired);
        writer.writeEnumValue<Enablement>("state", deviceEnrollmentWindowsHelloForBusinessConfiguration.state);
        writer.writeBooleanValue("unlockWithBiometricsEnabled", deviceEnrollmentWindowsHelloForBusinessConfiguration.unlockWithBiometricsEnabled);
}
