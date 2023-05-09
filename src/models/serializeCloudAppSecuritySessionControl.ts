import {CloudAppSecuritySessionControl} from './cloudAppSecuritySessionControl';
import {CloudAppSecuritySessionControlType} from './cloudAppSecuritySessionControlType';
import {serializeConditionalAccessSessionControl} from './serializeConditionalAccessSessionControl';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCloudAppSecuritySessionControl(writer: SerializationWriter, cloudAppSecuritySessionControl: CloudAppSecuritySessionControl | undefined = {} as CloudAppSecuritySessionControl) : void {
        serializeConditionalAccessSessionControl(writer, cloudAppSecuritySessionControl)
        writer.writeEnumValue<CloudAppSecuritySessionControlType>("cloudAppSecurityType", cloudAppSecuritySessionControl.cloudAppSecurityType);
}
