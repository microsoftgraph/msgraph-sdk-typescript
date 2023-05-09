import {serializeUserAgent} from './serializeUserAgent';
import {ServiceRole} from './serviceRole';
import {ServiceUserAgent} from './serviceUserAgent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceUserAgent(writer: SerializationWriter, serviceUserAgent: ServiceUserAgent | undefined = {} as ServiceUserAgent) : void {
        serializeUserAgent(writer, serviceUserAgent)
        writer.writeEnumValue<ServiceRole>("role", serviceUserAgent.role);
}
