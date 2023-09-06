import { VmCloudProvider } from './vmCloudProvider';
import { type VmMetadata } from './vmMetadata';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoVmMetadata(vmMetadata: VmMetadata | undefined = {} as VmMetadata) : Record<string, (node: ParseNode) => void> {
    return {
        "cloudProvider": n => { vmMetadata.cloudProvider = n.getEnumValue<VmCloudProvider>(VmCloudProvider); },
        "@odata.type": n => { vmMetadata.odataType = n.getStringValue(); },
        "resourceId": n => { vmMetadata.resourceId = n.getStringValue(); },
        "subscriptionId": n => { vmMetadata.subscriptionId = n.getStringValue(); },
        "vmId": n => { vmMetadata.vmId = n.getStringValue(); },
    }
}
