import {CloudAppSecuritySessionControl} from './cloudAppSecuritySessionControl';
import {CloudAppSecuritySessionControlType} from './cloudAppSecuritySessionControlType';
import {deserializeIntoConditionalAccessSessionControl} from './deserializeIntoConditionalAccessSessionControl';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCloudAppSecuritySessionControl(cloudAppSecuritySessionControl: CloudAppSecuritySessionControl | undefined = {} as CloudAppSecuritySessionControl) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoConditionalAccessSessionControl(cloudAppSecuritySessionControl),
        "cloudAppSecurityType": n => { cloudAppSecuritySessionControl.cloudAppSecurityType = n.getEnumValue<CloudAppSecuritySessionControlType>(CloudAppSecuritySessionControlType); },
    }
}
