import { type DelegatedAdminAccessContainer } from './delegatedAdminAccessContainer';
import { DelegatedAdminAccessContainerType } from './delegatedAdminAccessContainerType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDelegatedAdminAccessContainer(delegatedAdminAccessContainer: DelegatedAdminAccessContainer | undefined = {} as DelegatedAdminAccessContainer) : Record<string, (node: ParseNode) => void> {
    return {
        "accessContainerId": n => { delegatedAdminAccessContainer.accessContainerId = n.getStringValue(); },
        "accessContainerType": n => { delegatedAdminAccessContainer.accessContainerType = n.getEnumValue<DelegatedAdminAccessContainerType>(DelegatedAdminAccessContainerType); },
        "@odata.type": n => { delegatedAdminAccessContainer.odataType = n.getStringValue(); },
    }
}
