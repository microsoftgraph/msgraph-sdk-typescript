import {IosCertificateProfile} from './iosCertificateProfile';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosCertificateProfile(writer: SerializationWriter, iosCertificateProfile: IosCertificateProfile | undefined = {} as IosCertificateProfile) : void {
        serializeDeviceConfiguration(writer, iosCertificateProfile)
}
