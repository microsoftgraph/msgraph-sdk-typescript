import { deserializeIntoAuthenticationMethod } from './deserializeIntoAuthenticationMethod';
import { type SoftwareOathAuthenticationMethod } from './softwareOathAuthenticationMethod';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSoftwareOathAuthenticationMethod(softwareOathAuthenticationMethod: SoftwareOathAuthenticationMethod | undefined = {} as SoftwareOathAuthenticationMethod) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethod(softwareOathAuthenticationMethod),
        "secretKey": n => { softwareOathAuthenticationMethod.secretKey = n.getStringValue(); },
    }
}
