import {deserializeIntoDeviceEnrollmentConfiguration} from './deserializeIntoDeviceEnrollmentConfiguration';
import {DeviceEnrollmentWindowsHelloForBusinessConfiguration} from './deviceEnrollmentWindowsHelloForBusinessConfiguration';
import {Enablement} from './enablement';
import {WindowsHelloForBusinessPinUsage} from './windowsHelloForBusinessPinUsage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceEnrollmentWindowsHelloForBusinessConfiguration(deviceEnrollmentWindowsHelloForBusinessConfiguration: DeviceEnrollmentWindowsHelloForBusinessConfiguration | undefined = {} as DeviceEnrollmentWindowsHelloForBusinessConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceEnrollmentConfiguration(deviceEnrollmentWindowsHelloForBusinessConfiguration),
        "enhancedBiometricsState": n => { deviceEnrollmentWindowsHelloForBusinessConfiguration.enhancedBiometricsState = n.getEnumValue<Enablement>(Enablement); },
        "pinExpirationInDays": n => { deviceEnrollmentWindowsHelloForBusinessConfiguration.pinExpirationInDays = n.getNumberValue(); },
        "pinLowercaseCharactersUsage": n => { deviceEnrollmentWindowsHelloForBusinessConfiguration.pinLowercaseCharactersUsage = n.getEnumValue<WindowsHelloForBusinessPinUsage>(WindowsHelloForBusinessPinUsage); },
        "pinMaximumLength": n => { deviceEnrollmentWindowsHelloForBusinessConfiguration.pinMaximumLength = n.getNumberValue(); },
        "pinMinimumLength": n => { deviceEnrollmentWindowsHelloForBusinessConfiguration.pinMinimumLength = n.getNumberValue(); },
        "pinPreviousBlockCount": n => { deviceEnrollmentWindowsHelloForBusinessConfiguration.pinPreviousBlockCount = n.getNumberValue(); },
        "pinSpecialCharactersUsage": n => { deviceEnrollmentWindowsHelloForBusinessConfiguration.pinSpecialCharactersUsage = n.getEnumValue<WindowsHelloForBusinessPinUsage>(WindowsHelloForBusinessPinUsage); },
        "pinUppercaseCharactersUsage": n => { deviceEnrollmentWindowsHelloForBusinessConfiguration.pinUppercaseCharactersUsage = n.getEnumValue<WindowsHelloForBusinessPinUsage>(WindowsHelloForBusinessPinUsage); },
        "remotePassportEnabled": n => { deviceEnrollmentWindowsHelloForBusinessConfiguration.remotePassportEnabled = n.getBooleanValue(); },
        "securityDeviceRequired": n => { deviceEnrollmentWindowsHelloForBusinessConfiguration.securityDeviceRequired = n.getBooleanValue(); },
        "state": n => { deviceEnrollmentWindowsHelloForBusinessConfiguration.state = n.getEnumValue<Enablement>(Enablement); },
        "unlockWithBiometricsEnabled": n => { deviceEnrollmentWindowsHelloForBusinessConfiguration.unlockWithBiometricsEnabled = n.getBooleanValue(); },
    }
}
