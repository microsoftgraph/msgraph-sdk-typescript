import {ApiAuthenticationConfigurationBase} from './apiAuthenticationConfigurationBase';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApiAuthenticationConfigurationBase(writer: SerializationWriter, apiAuthenticationConfigurationBase: ApiAuthenticationConfigurationBase | undefined = {} as ApiAuthenticationConfigurationBase) : void {
        writer.writeStringValue("@odata.type", apiAuthenticationConfigurationBase.odataType);
        writer.writeAdditionalData(apiAuthenticationConfigurationBase.additionalData);
}
