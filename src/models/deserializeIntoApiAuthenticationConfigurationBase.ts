import { type ApiAuthenticationConfigurationBase } from './apiAuthenticationConfigurationBase';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoApiAuthenticationConfigurationBase(apiAuthenticationConfigurationBase: ApiAuthenticationConfigurationBase | undefined = {} as ApiAuthenticationConfigurationBase) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { apiAuthenticationConfigurationBase.odataType = n.getStringValue(); },
    }
}
