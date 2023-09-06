import { type IpRange } from './ipRange';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIpRange(writer: SerializationWriter, ipRange: IpRange | undefined = {} as IpRange) : void {
        writer.writeStringValue("@odata.type", ipRange.odataType);
        writer.writeAdditionalData(ipRange.additionalData);
}
