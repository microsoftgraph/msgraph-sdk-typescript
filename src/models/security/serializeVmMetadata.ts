import {VmCloudProvider} from './vmCloudProvider';
import {VmMetadata} from './vmMetadata';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeVmMetadata(writer: SerializationWriter, vmMetadata: VmMetadata | undefined = {} as VmMetadata) : void {
        writer.writeEnumValue<VmCloudProvider>("cloudProvider", vmMetadata.cloudProvider);
        writer.writeStringValue("@odata.type", vmMetadata.odataType);
        writer.writeStringValue("resourceId", vmMetadata.resourceId);
        writer.writeStringValue("subscriptionId", vmMetadata.subscriptionId);
        writer.writeStringValue("vmId", vmMetadata.vmId);
        writer.writeAdditionalData(vmMetadata.additionalData);
}
