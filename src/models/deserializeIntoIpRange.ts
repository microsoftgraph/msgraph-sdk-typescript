import { type IpRange } from './ipRange';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIpRange(ipRange: IpRange | undefined = {} as IpRange) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { ipRange.odataType = n.getStringValue(); },
    }
}
