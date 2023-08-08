import {AccessPackageCustomExtensionStage} from './accessPackageCustomExtensionStage';
import type {CustomCalloutExtension} from './customCalloutExtension';
import type {CustomExtensionStageSetting} from './customExtensionStageSetting';
import {serializeCustomCalloutExtension} from './serializeCustomCalloutExtension';
import {serializeEntity} from './serializeEntity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCustomExtensionStageSetting(writer: SerializationWriter, customExtensionStageSetting: CustomExtensionStageSetting | undefined = {} as CustomExtensionStageSetting) : void {
        serializeEntity(writer, customExtensionStageSetting)
        writer.writeObjectValue<CustomCalloutExtension>("customExtension", customExtensionStageSetting.customExtension, serializeCustomCalloutExtension);
        writer.writeEnumValue<AccessPackageCustomExtensionStage>("stage", customExtensionStageSetting.stage);
}
