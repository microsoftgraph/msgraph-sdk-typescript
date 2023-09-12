import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeUserFlowLanguageConfiguration } from './serializeUserFlowLanguageConfiguration';
import { type UserFlowLanguageConfiguration } from './userFlowLanguageConfiguration';
import { type UserFlowLanguageConfigurationCollectionResponse } from './userFlowLanguageConfigurationCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserFlowLanguageConfigurationCollectionResponse(writer: SerializationWriter, userFlowLanguageConfigurationCollectionResponse: UserFlowLanguageConfigurationCollectionResponse | undefined = {} as UserFlowLanguageConfigurationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userFlowLanguageConfigurationCollectionResponse)
        writer.writeCollectionOfObjectValues<UserFlowLanguageConfiguration>("value", userFlowLanguageConfigurationCollectionResponse.value, serializeUserFlowLanguageConfiguration);
}
