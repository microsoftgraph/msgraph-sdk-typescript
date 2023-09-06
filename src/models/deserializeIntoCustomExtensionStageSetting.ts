import { AccessPackageCustomExtensionStage } from './accessPackageCustomExtensionStage';
import { createCustomCalloutExtensionFromDiscriminatorValue } from './createCustomCalloutExtensionFromDiscriminatorValue';
import { type CustomCalloutExtension } from './customCalloutExtension';
import { type CustomExtensionStageSetting } from './customExtensionStageSetting';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeCustomCalloutExtension } from './serializeCustomCalloutExtension';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomExtensionStageSetting(customExtensionStageSetting: CustomExtensionStageSetting | undefined = {} as CustomExtensionStageSetting) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(customExtensionStageSetting),
        "customExtension": n => { customExtensionStageSetting.customExtension = n.getObjectValue<CustomCalloutExtension>(createCustomCalloutExtensionFromDiscriminatorValue); },
        "stage": n => { customExtensionStageSetting.stage = n.getEnumValue<AccessPackageCustomExtensionStage>(AccessPackageCustomExtensionStage); },
    }
}
