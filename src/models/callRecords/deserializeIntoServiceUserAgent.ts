import { deserializeIntoUserAgent } from './deserializeIntoUserAgent';
import { ServiceRole } from './serviceRole';
import { type ServiceUserAgent } from './serviceUserAgent';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceUserAgent(serviceUserAgent: ServiceUserAgent | undefined = {} as ServiceUserAgent) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUserAgent(serviceUserAgent),
        "role": n => { serviceUserAgent.role = n.getEnumValue<ServiceRole>(ServiceRole); },
    }
}
