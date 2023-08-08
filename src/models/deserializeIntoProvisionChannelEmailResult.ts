import type {ProvisionChannelEmailResult} from './provisionChannelEmailResult';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisionChannelEmailResult(provisionChannelEmailResult: ProvisionChannelEmailResult | undefined = {} as ProvisionChannelEmailResult) : Record<string, (node: ParseNode) => void> {
    return {
        "email": n => { provisionChannelEmailResult.email = n.getStringValue(); },
        "@odata.type": n => { provisionChannelEmailResult.odataType = n.getStringValue(); },
    }
}
