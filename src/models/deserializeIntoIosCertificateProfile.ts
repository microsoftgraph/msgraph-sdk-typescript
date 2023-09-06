import { deserializeIntoDeviceConfiguration } from './deserializeIntoDeviceConfiguration';
import { type IosCertificateProfile } from './iosCertificateProfile';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIosCertificateProfile(iosCertificateProfile: IosCertificateProfile | undefined = {} as IosCertificateProfile) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(iosCertificateProfile),
    }
}
