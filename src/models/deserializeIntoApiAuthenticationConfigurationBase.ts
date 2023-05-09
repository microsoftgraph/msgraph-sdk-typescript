import {ApiAuthenticationConfigurationBase} from './apiAuthenticationConfigurationBase';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApiAuthenticationConfigurationBase(apiAuthenticationConfigurationBase: ApiAuthenticationConfigurationBase | undefined = {} as ApiAuthenticationConfigurationBase) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { apiAuthenticationConfigurationBase.odataType = n.getStringValue(); },
    }
}
