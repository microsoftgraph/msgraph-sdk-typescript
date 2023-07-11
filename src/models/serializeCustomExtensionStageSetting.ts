import {AccessPackageCustomExtensionStage} from './accessPackageCustomExtensionStage';
import {CustomCalloutExtension} from './customCalloutExtension';
import {CustomExtensionStageSetting} from './customExtensionStageSetting';
import {serializeCustomCalloutExtension} from './serializeCustomCalloutExtension';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCustomExtensionStageSetting(writer: SerializationWriter, customExtensionStageSetting: CustomExtensionStageSetting | undefined = {} as CustomExtensionStageSetting) : void {
        serializeEntity(writer, customExtensionStageSetting)
        writer.writeObjectValue<CustomCalloutExtension>("customExtension", customExtensionStageSetting.customExtension, serializeCustomCalloutExtension);
        writer.writeEnumValue<AccessPackageCustomExtensionStage>("stage", customExtensionStageSetting.stage);
}
