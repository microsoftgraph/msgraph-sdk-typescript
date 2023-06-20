import {ApiAuthenticationConfigurationBase} from './apiAuthenticationConfigurationBase';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApiAuthenticationConfigurationBase(apiAuthenticationConfigurationBase: ApiAuthenticationConfigurationBase | undefined = {} as ApiAuthenticationConfigurationBase, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", apiAuthenticationConfigurationBase.odataType);
        writer.writeAdditionalData(apiAuthenticationConfigurationBase.additionalData);
}
