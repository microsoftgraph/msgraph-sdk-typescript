import {AccessPackageCustomExtensionStage} from './accessPackageCustomExtensionStage';
import {createCustomCalloutExtensionFromDiscriminatorValue} from './createCustomCalloutExtensionFromDiscriminatorValue';
import {CustomCalloutExtension} from './customCalloutExtension';
import {CustomExtensionStageSetting} from './customExtensionStageSetting';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeCustomCalloutExtension} from './serializeCustomCalloutExtension';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomExtensionStageSetting(customExtensionStageSetting: CustomExtensionStageSetting | undefined = {} as CustomExtensionStageSetting) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(customExtensionStageSetting),
        "customExtension": n => { customExtensionStageSetting.customExtension = n.getObjectValue<CustomCalloutExtension>(createCustomCalloutExtensionFromDiscriminatorValue); },
        "stage": n => { customExtensionStageSetting.stage = n.getEnumValue<AccessPackageCustomExtensionStage>(AccessPackageCustomExtensionStage); },
    }
}
