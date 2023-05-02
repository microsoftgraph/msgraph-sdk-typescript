import {createUserFlowLanguageConfigurationFromDiscriminatorValue} from './createUserFlowLanguageConfigurationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserFlowLanguageConfiguration} from './serializeUserFlowLanguageConfiguration';
import {UserFlowLanguageConfiguration} from './userFlowLanguageConfiguration';
import {UserFlowLanguageConfigurationCollectionResponse} from './userFlowLanguageConfigurationCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserFlowLanguageConfigurationCollectionResponse(userFlowLanguageConfigurationCollectionResponse: UserFlowLanguageConfigurationCollectionResponse | undefined = {} as UserFlowLanguageConfigurationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userFlowLanguageConfigurationCollectionResponse),
        "value": n => { userFlowLanguageConfigurationCollectionResponse.value = n.getCollectionOfObjectValues<UserFlowLanguageConfiguration>(createUserFlowLanguageConfigurationFromDiscriminatorValue); },
    }
}
