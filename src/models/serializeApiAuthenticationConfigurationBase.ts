import { type ApiAuthenticationConfigurationBase } from './apiAuthenticationConfigurationBase';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeApiAuthenticationConfigurationBase(writer: SerializationWriter, apiAuthenticationConfigurationBase: ApiAuthenticationConfigurationBase | undefined = {} as ApiAuthenticationConfigurationBase) : void {
        writer.writeStringValue("@odata.type", apiAuthenticationConfigurationBase.odataType);
        writer.writeAdditionalData(apiAuthenticationConfigurationBase.additionalData);
}
