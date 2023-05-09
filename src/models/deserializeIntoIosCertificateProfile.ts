import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {IosCertificateProfile} from './iosCertificateProfile';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosCertificateProfile(iosCertificateProfile: IosCertificateProfile | undefined = {} as IosCertificateProfile) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(iosCertificateProfile),
    }
}
