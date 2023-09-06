import { type IpEvidence } from './ipEvidence';
import { serializeAlertEvidence } from './serializeAlertEvidence';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIpEvidence(writer: SerializationWriter, ipEvidence: IpEvidence | undefined = {} as IpEvidence) : void {
        serializeAlertEvidence(writer, ipEvidence)
        writer.writeStringValue("countryLetterCode", ipEvidence.countryLetterCode);
        writer.writeStringValue("ipAddress", ipEvidence.ipAddress);
}
