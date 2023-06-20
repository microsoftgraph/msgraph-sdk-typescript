import {IpRange} from './ipRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIpRange(ipRange: IpRange | undefined = {} as IpRange, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", ipRange.odataType);
        writer.writeAdditionalData(ipRange.additionalData);
}
