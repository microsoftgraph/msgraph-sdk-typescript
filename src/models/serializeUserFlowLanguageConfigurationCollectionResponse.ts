import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserFlowLanguageConfiguration} from './serializeUserFlowLanguageConfiguration';
import {UserFlowLanguageConfiguration} from './userFlowLanguageConfiguration';
import {UserFlowLanguageConfigurationCollectionResponse} from './userFlowLanguageConfigurationCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserFlowLanguageConfigurationCollectionResponse(writer: SerializationWriter, userFlowLanguageConfigurationCollectionResponse: UserFlowLanguageConfigurationCollectionResponse | undefined = {} as UserFlowLanguageConfigurationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userFlowLanguageConfigurationCollectionResponse)
        writer.writeCollectionOfObjectValues<UserFlowLanguageConfiguration>("value", userFlowLanguageConfigurationCollectionResponse.value, serializeUserFlowLanguageConfiguration);
}
