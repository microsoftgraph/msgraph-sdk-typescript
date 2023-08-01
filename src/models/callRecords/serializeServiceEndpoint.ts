import {serializeEndpoint} from './serializeEndpoint';
import type {ServiceEndpoint} from './serviceEndpoint';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceEndpoint(writer: SerializationWriter, serviceEndpoint: ServiceEndpoint | undefined = {} as ServiceEndpoint) : void {
        serializeEndpoint(writer, serviceEndpoint)
}
