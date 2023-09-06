import { type DelegatedAdminAccessContainer } from './delegatedAdminAccessContainer';
import { DelegatedAdminAccessContainerType } from './delegatedAdminAccessContainerType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDelegatedAdminAccessContainer(writer: SerializationWriter, delegatedAdminAccessContainer: DelegatedAdminAccessContainer | undefined = {} as DelegatedAdminAccessContainer) : void {
        writer.writeStringValue("accessContainerId", delegatedAdminAccessContainer.accessContainerId);
        writer.writeEnumValue<DelegatedAdminAccessContainerType>("accessContainerType", delegatedAdminAccessContainer.accessContainerType);
        writer.writeStringValue("@odata.type", delegatedAdminAccessContainer.odataType);
        writer.writeAdditionalData(delegatedAdminAccessContainer.additionalData);
}
