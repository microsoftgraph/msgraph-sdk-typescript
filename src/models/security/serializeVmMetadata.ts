import { VmCloudProvider } from './vmCloudProvider';
import { type VmMetadata } from './vmMetadata';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeVmMetadata(writer: SerializationWriter, vmMetadata: VmMetadata | undefined = {} as VmMetadata) : void {
        writer.writeEnumValue<VmCloudProvider>("cloudProvider", vmMetadata.cloudProvider);
        writer.writeStringValue("@odata.type", vmMetadata.odataType);
        writer.writeStringValue("resourceId", vmMetadata.resourceId);
        writer.writeStringValue("subscriptionId", vmMetadata.subscriptionId);
        writer.writeStringValue("vmId", vmMetadata.vmId);
        writer.writeAdditionalData(vmMetadata.additionalData);
}
