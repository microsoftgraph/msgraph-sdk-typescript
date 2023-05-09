import {deserializeIntoEndpoint} from './deserializeIntoEndpoint';
import {ServiceEndpoint} from './serviceEndpoint';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceEndpoint(serviceEndpoint: ServiceEndpoint | undefined = {} as ServiceEndpoint) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEndpoint(serviceEndpoint),
    }
}
