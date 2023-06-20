import {CloudAppSecuritySessionControl} from './cloudAppSecuritySessionControl';
import {CloudAppSecuritySessionControlType} from './cloudAppSecuritySessionControlType';
import {serializeConditionalAccessSessionControl} from './serializeConditionalAccessSessionControl';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCloudAppSecuritySessionControl(cloudAppSecuritySessionControl: CloudAppSecuritySessionControl | undefined = {} as CloudAppSecuritySessionControl, writer: SerializationWriter) : void {
        serializeConditionalAccessSessionControl(writer, cloudAppSecuritySessionControl)
        writer.writeEnumValue<CloudAppSecuritySessionControlType>("cloudAppSecurityType", cloudAppSecuritySessionControl.cloudAppSecurityType);
}
