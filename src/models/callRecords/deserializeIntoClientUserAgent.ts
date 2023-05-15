import {ClientPlatform} from './clientPlatform';
import {ClientUserAgent} from './clientUserAgent';
import {deserializeIntoUserAgent} from './deserializeIntoUserAgent';
import {ProductFamily} from './productFamily';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoClientUserAgent(clientUserAgent: ClientUserAgent | undefined = {} as ClientUserAgent) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUserAgent(clientUserAgent),
        "azureADAppId": n => { clientUserAgent.azureADAppId = n.getStringValue(); },
        "communicationServiceId": n => { clientUserAgent.communicationServiceId = n.getStringValue(); },
        "platform": n => { clientUserAgent.platform = n.getEnumValue<ClientPlatform>(ClientPlatform); },
        "productFamily": n => { clientUserAgent.productFamily = n.getEnumValue<ProductFamily>(ProductFamily); },
    }
}
