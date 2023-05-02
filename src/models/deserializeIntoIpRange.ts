import {IpRange} from './ipRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIpRange(ipRange: IpRange | undefined = {} as IpRange) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { ipRange.odataType = n.getStringValue(); },
    }
}
