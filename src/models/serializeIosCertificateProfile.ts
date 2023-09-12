import { type IosCertificateProfile } from './iosCertificateProfile';
import { serializeDeviceConfiguration } from './serializeDeviceConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIosCertificateProfile(writer: SerializationWriter, iosCertificateProfile: IosCertificateProfile | undefined = {} as IosCertificateProfile) : void {
        serializeDeviceConfiguration(writer, iosCertificateProfile)
}
