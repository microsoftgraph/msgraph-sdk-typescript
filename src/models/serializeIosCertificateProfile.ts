import {IosCertificateProfile} from './iosCertificateProfile';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosCertificateProfile(iosCertificateProfile: IosCertificateProfile | undefined = {} as IosCertificateProfile, writer: SerializationWriter) : void {
        serializeDeviceConfiguration(writer, iosCertificateProfile)
}
